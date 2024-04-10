// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";
//async Group Result.

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

//   const resultCentral = await central(id);
//   const returnedValue = await dbs[resultCentral](id);
//   const v = await vault(id);
//   //console.log(dbs[resultCentral](id));
//   console.log(returnedValue);
//   console.log(v);
// }

  
  
  
  
  
  //Async Going over with Oussama
  
  // promise- Something that start now and finishes later

  // try catch- for the code not to break even if there is an error 

  //1st way
  // central(id)
  //   .then((valueReturnedFromCentral) => {
  //   console.log(data)
  //   })
  
  // first request to get database name.

//2nd request to dbs database and invoke and then you pass the idea.

const database = await central(id);
const data = await dbs[database](id)
console.log(data)
console.log((date.now() - time) / 1000)
}

getUserData(2)
//.Then.catch Group Result.

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };

//   central(id)
//     .then((resultCentral) => {
//       return dbs[resultCentral](id);
//     })
//     .then((r) => {
//       console.log(r);
//       return vault(id)
//     })
//     .then((v) => {
//       console.log(v);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  Promise.all([central(id), vault(id)])
    .then(([resultCentral, rVault]) => {
      return Promise.all([dbs[resultCentral](id), rVault]);
    })
    .then(([dbResult, v]) => {
      console.log(dbResult);
      console.log(v);
    })
    .catch((err) => console.error(err));
}

getUserData(5);