const { MongoClient } = require('mongodb');

async function main() {
  const uri =
    'mongodb+srv://zihadm654:Zihad135@cluster0.jl2vy.mongodb.net/portfolioData?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('mongo is connected');
    // Make the appropriate DB calls
    // await client.db(Collection, 'listing');
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
  // getDb = client.db();
}

main().catch(console.error);

// const db = () => {
//   if (getDb) return getDb;
// };
// console.log(db);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log('databases:');
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
