const router = require("express").Router();
const Acronyms = require("./wtf-model");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.get("/acronym/:name", (req, res) => {
  const name = req.params.name;

  Acronyms.getAcronymByName(name)
    // acr is my acronym for acronym :)
    .then((acr) => {
      if (!acr) {
        res
          .status(404)
          .json({ error: "An acronym with this name does not exist." });
      } else {
        res.status(200).json(acr);
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Something went wrong while trying to retrieve the acronym.",
      });
    });
});

router.post("/acronym", (req, res) => {
  let acr = req.body;

  Acronyms.addAcronym(acr)
    .then(() => {
      res.status(201).json(acr);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was a problem adding an acronym to this" });
    });
});

function validUpdate(update) {
  const { definition } = update;
  return definition;
}

router.put("/acronym/:id", async (req, res) => {
  try {
    if (!validUpdate(req.body)) {
      res
        .status(400)
        .json({
          error: "Please provide a definition.",
        });
    } else {
      const update = await Acronyms.updateAcronym(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "The definition was successfully updated." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "There was a problem updating the definition of this acronym.",
      });
  }
});

router.delete("/acronym/:id", (req, res) => {
    const id = req.params.id;
  
    Acronyms.deleteAcronym(id)
      .then(acr=> {
        if (acr) {
          res
            .status(200)
            .json({ message: "Your acronym was deleted successfully." });
        } else {
          res.status(404).json({ error: " An acronym with this ID does not exist." });
        }
      })
      .catch(error => {
        req
          .status(500)
          .json({ error: "Something went wrong trying to delete this acronym." });
      });
  });

// function generateToken(acr) {
//   const jwtPayLoad = {
//     subject: acr.id,
//     name: acr.name,
//     definition: acr.definition,
//   };

//   const jwtOptions = {
//     expiresIn: "1d",
//   };

//   return jwt.sign(jwtPayLoad, secrets.jwtSecret, jwtOptions);
// }

// router.get(`/random`, (req, res) => {

//   const address = `http://localhost:5000/api/random/${count}`
//   const q = Url.parse(address, true)
//   let count = q.search
//   console.log(count)

//   Acronyms.getRandomAcronyms()
//     .then((arcs) => {
//       res.status(201).json(arcs);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "The acronyms could not be retreived" });
//     });
// });

module.exports = router;
