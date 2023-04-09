const getConnection = require('./util/dbConnection')

exports.dbController = async (req) => {
  // const searchText1 = event.queryStringParameters.searchText1; //Theme
  // const searchText2 = event.queryStringParameters.searchText2; //Type
  // const searchText3 = event.queryStringParameters.searchText3; //Status
  // const searchText4 = event.queryStringParameters.searchText4; //Reviewer
  // const searchText5 = event.queryStringParameters.searchText5; //AccountCode
  // const searchText6 = event.queryStringParameters.searchText6; //DU

  // const query = "Select * from Person WHERE column1 LIKE '%${searchText1}%' OR column2 LIKE '%${searchText2}%' OR column3 LIKE '%${searchText3}%' OR column4  LIKE '%${searchText4}%' OR column5 LIKE '%${searchText5}%' OR column6 LIKE '%${searchText6}%"

  const query = `SELECT * FROM sys.person WHERE name = '${req}'`;
  const connection = await getConnection();
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    return results
  } catch (error) {
    console.error(error);
  }
  };

