require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { audioDatabase } = require("./audioDatabase");

// Export audio index for production build (MongoDB → static JSON)
async function exportAudio() {
  console.log(" Exporting audio for production build...");
  
  const exportPath = path.join(process.cwd(), 'src', 'data', 'audio-index.json');
  
  try {
    // If MongoDB is configured, export from there
    if (process.env.MONGODB_URI) {
      console.log(" MongoDB configured: Exporting from database");
      
      await audioDatabase.exportToFile(exportPath);
      
      const stats = await audioDatabase.getStats();
      console.log(` Exported ${stats.totalRecords} audio records from MongoDB`);
      console.log(` ${stats.entriesWithAudio} entries have audio`);
      console.log(` Records by level:`, stats.recordsByLevel);
      
      // Close MongoDB connection
      await audioDatabase.close();
      
    } else {
      // No MongoDB - use existing local file or create empty
      console.log(" No MongoDB configured: Using local files");
      
      if (fs.existsSync(exportPath)) {
        const content = fs.readFileSync(exportPath, 'utf-8');
        const index = JSON.parse(content);
        console.log(` Using existing local index with ${Object.keys(index.records).length} records`);
      } else {
        // Create minimal empty index
        const emptyIndex = {
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          records: {},
          entryIndex: {},
          levelIndex: {}
        };
        
        // Ensure directory exists
        const dir = path.dirname(exportPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(exportPath, JSON.stringify(emptyIndex, null, 2));
        console.log(" Created empty audio index (no existing data)");
      }
    }
    
    console.log(` Audio export completed: ${exportPath}`);
    
  } catch (error) {
    console.error(" Failed to export audio:", error);
    
    // Create empty index as fallback
    const fallbackPath = path.join(process.cwd(), 'src', 'data', 'audio-index.json');
    const emptyIndex = {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      records: {},
      entryIndex: {},
      levelIndex: {}
    };
    
    // Ensure directory exists
    const dir = path.dirname(fallbackPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fallbackPath, JSON.stringify(emptyIndex, null, 2));
    console.log(" Created empty audio index as fallback");
  } finally {
    if (process.env.AUDIO_MODE === 'production') {
      await audioDatabase.close();
    }
  }
}

// Run if called directly
if (require.main === module) {
  exportAudio().catch(console.error);
}

module.exports = { exportAudio };
