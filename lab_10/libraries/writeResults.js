async function writeResults(names, zipcodes, interests, dbSettings) {
  console.log(`Form data added`);
  const db = await open(dbSettings)
  await db.exec('CREATE TABLE IF NOT EXISTS formResults (name varchar(100), zipcode int, interests text)');
  await db.exec(`INSERT INTO formResults VALUES ("${names}", "${zipcodes}", "${interests}")`);
  const result = await db.each('SELECT * FROM formResults', (err) => {
      console.log('writeResults', err);
      if (err) { throw err; }
  });
  console.log('Expected form result', result);
  return result;
}

export default writeResults;