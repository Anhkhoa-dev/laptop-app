const laptopController = require('../controllers/laptop.controller')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const storate = multer.diskStorage({
    // thiet lap noi luu file
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    // xu ly ten file
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  },
  });
  
  const upload = multer({storage: storate});





router.get('/', laptopController.getLaptops)


router.get('/create', laptopController.getViewCreate)

router.post('/create', upload.single('photo'), laptopController.createLaptop)

router.get('/update/:id', laptopController.getViewUpdate)

router.put('/update/:id', upload.single('photo'), laptopController.updateLaptop)


module.exports = router