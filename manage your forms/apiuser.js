var express = require('express');
var router = express.Router();

const db = require('../../../db/mongoose')


//routes 


router.get('/:id', function (req, res, next) {
  let readObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }

  db.readOne(readObj)
    .then(response => {
      console.log(response.fullName())
      res.json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
 
});

router.post('/signup', function (req, res, next) {
  let createObj = {
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }

  db.create(createObj)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

//login 
router.post('/login', function (req, res, next){
  //ToDO 
  //convert fuction to authenticate from db
    console.log("post")
  //temp code
  if(req.body.password === "password1234"){
    res.json({fName: "Joe", lName: "Volcano"})
  }else{
    res.json({})
  }
})


router.put('/:id', function (req, res, next) {
  let putObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", putObj)
  db.readOne(putObj)
    .then(response => {
      if (response == null) {
        db.create(putObj).then(response => {
          res.json(response)
        })
      } else {
        db.replace(putObj)
          .then(response => {
            res.json(response)
          })
      }
      // res.json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })

});


//end of patch

router.delete('/:id', function (req, res, next) {
  let deleteObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }

  db.del(deleteObj)
    .then(response => {
      if (response.deletedItems == 1) {
        res.json({ response })
      }
      throw new Error("not found")
    })
    .catch(error => {
      res.status(500).json(error)

    })

})
//end of delete
router.patch('/:id', async function (req, res, next) {
  let patchObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  try {
    let response = await db.readOne(patchObj)
    if (response == null) {
      throw new Error('not found')
    } else {
      await db.update(patchObj)
      res.json(await db.readOne(patchObj))
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});



router.get('/', function (req, res, next) {
  let readObj = {
    usersCollection: req.app.locals.usersCollection
  }
  db.readAll(readObj)
    .then(response => {
      res.json(response)
    })

})
module.exports = router
