#!/usr/bin/env node

/**
 * Validate Audio References Script
 * 
 * This script validates that all audio references in challenges and static data
 * point to accessible URLs based on the current AUDIO_MODE.
 */

require('dotenv').config();

async function validateAudioReferences() {
  console.log(' Validating audio references...');
  
  const mode = process.env.AUDIO_MODE || 'local';
  console.log(` Current AUDIO_MODE: ${mode}`);
  
  const issues = [];
  
  try {
    // Check challenges in database (if production mode)
    if (mode === 'production') {
      console.log(' Checking challenges in database...');
      
      const { getDatabase } = await import('../lib/mongodb.ts');
      const db = await getDatabase();
      
      // Check regular challenges
      const challenges = await db.collection('challenges').find({
        audioUrl: { $exists: true, $ne: null }
      }).toArray();
      
      challenges.forEach(challenge => {
        if (challenge.audioUrl.startsWith('/uploads/audio/')) {
          issues.push({
            type: 'challenge',
            id: challenge._id,
            issue: 'References local file in production mode',
            audioUrl: challenge.audioUrl
          });
        }
      });
      
      // Check daily challenges
      const dailyChallenges = await db.collection('daily_challenges').find({
        'challenge.audioUrl': { $exists: true, $ne: null }
      }).toArray();
      
      dailyChallenges.forEach(dailyChallenge => {
        if (dailyChallenge.challenge.audioUrl?.startsWith('/uploads/audio/')) {
          issues.push({
            type: 'daily_challenge',
            id: dailyChallenge._id,
            date: dailyChallenge.date,
            issue: 'References local file in production mode',
            audioUrl: dailyChallenge.challenge.audioUrl
          });
        }
      });
    }
    
    // Check static audio index
    console.log(' Checking static audio index...');
    const { readFile, existsSync } = require('fs').promises;
    const path = require('path');
    
    const indexPath = path.join(process.cwd(), 'src', 'data', 'audio-index.json');
    
    if (existsSync && await existsSync(indexPath)) {
      const indexContent = await readFile(indexPath, 'utf-8');
      const index = JSON.parse(indexContent);
      
      Object.values(index.records || {}).forEach(record => {
        if (mode === 'production' && record.url.startsWith('/uploads/audio/')) {
          issues.push({
            type: 'static_index',
            id: record.id,
            issue: 'Static index has local file URL in production mode',
            audioUrl: record.url
          });
        }
        
        if (mode === 'local' && record.url.startsWith('https://')) {
          issues.push({
            type: 'static_index',
            id: record.id,
            issue: 'Static index has blob URL in local mode',
            audioUrl: record.url
          });
        }
      });
    }
    
    // Report results
    if (issues.length === 0) {
      console.log(' All audio references are valid for current mode!');
      return true;
    }
    
    console.log(` Found ${issues.length} audio reference issues:`);
    console.log('');
    
    issues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.type.toUpperCase()}: ${issue.id}`);
      console.log(`   Issue: ${issue.issue}`);
      console.log(`   URL: ${issue.audioUrl}`);
      if (issue.date) console.log(`   Date: ${issue.date}`);
      console.log('');
    });
    
    console.log(' Recommendations:');
    if (mode === 'production') {
      console.log('   - Upload local audio files to production storage');
      console.log('   - Update challenge records to use blob URLs');
      console.log('   - Regenerate static index from production data');
    } else {
      console.log('   - Download blob files to local storage');
      console.log('   - Update static index to use local URLs');
    }
    
    return false;
    
  } catch (error) {
    console.error(' Validation failed:', error);
    return false;
  }
}

// Run if called directly
if (require.main === module) {
  validateAudioReferences()
    .then(isValid => {
      if (isValid) {
        console.log('\n Audio validation passed!');
        process.exit(0);
      } else {
        console.log('\n Audio validation failed!');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error(' Validation error:', error);
      process.exit(1);
    });
}

module.exports = { validateAudioReferences };
