// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };

//   const resultCentral = await central(id);
//   const returnedValue = await dbs[resultCentral](id);
//   const v = await vault(id);
//   //console.log(dbs[resultCentral](id));
//   console.log(returnedValue);
//   console.log(v);
// }

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