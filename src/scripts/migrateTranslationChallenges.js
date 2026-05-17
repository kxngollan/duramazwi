/**
 * Migration script to rename 'options' to 'distractors' for translation_builder challenges
 * 
 * Run with: node src/scripts/migrateTranslationChallenges.js
 */

require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'chishona';

async function migrateTranslationChallenges() {
  if (!MONGODB_URI) {
    console.error(' MONGODB_URI not found in environment variables');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log(' Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('challenges');

    // Find all translation_builder challenges that have 'options' but not 'distractors'
    const challenges = await collection.find({
      type: 'translation_builder',
      options: { $exists: true },
      distractors: { $exists: false }
    }).toArray();

    console.log(`\n Found ${challenges.length} translation challenges to migrate`);

    if (challenges.length === 0) {
      console.log(' No challenges need migration');
      return;
    }

    // Migrate each challenge
    let migrated = 0;
    for (const challenge of challenges) {
      const result = await collection.updateOne(
        { _id: challenge._id },
        {
          $set: { distractors: challenge.options },
          $unset: { options: '' }
        }
      );

      if (result.modifiedCount > 0) {
        migrated++;
        console.log(` Migrated challenge: ${challenge.id || challenge._id} - "${challenge.question}"`);
      }
    }

    console.log(`\n Migration complete! Migrated ${migrated} challenges`);

  } catch (error) {
    console.error(' Migration failed:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n Disconnected from MongoDB');
  }
}

// Run the migration
migrateTranslationChallenges();
