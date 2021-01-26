const db = require("../data/db-config");

module.exports = {
  getAcronymByName,
  addAcronym,
  updateAcronym,
  deleteAcronym
  //   getRandomAcronyms,
};

function getAcronymByName(name) {
  return db("acronyms")
    .where("acronyms.name", name)
    .select("id", "name", "definition");
}

// function getRandomAcronyms() {
//   return db("acronyms").then(() => {
//     return createArray();
//   });
// }

// function createArray() {
//   const data = db("acronyms").select("name", "description");
//   console.log(5)
//   const random = data.sort(() => 0.5 - Math.random());
//   let result = random.slice(0, 10);
//   return result;
// }

function addAcronym(acr) {
  return db("acronyms").insert(acr);
}

function updateAcronym(id, changes) {
  return db("acronyms").where({ id }).update(changes);
}

function deleteAcronym(id){
    return db("acronyms").where({ id }).delete()
}