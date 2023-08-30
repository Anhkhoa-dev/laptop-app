const Laptop = require('../models/laptop.model')


const laptopController = {

    // lấy toàn bộ sản phâm theo danh sách
    getLaptops: async(req, res) =>{
        const laptops = await Laptop.find()
         res.render('laptop/index', {laptops: laptops})

    } ,

    // lấy sản phẩm theo id
    getLaptopById: async(req, res) =>{
       return await Laptop.findById(req.params.id)
    },
    getViewCreate: (req, res)=>{
        res.render('laptop/create')
    },

    getViewUpdate: async(req, res, next)=>{
        try{
            const laptop = await Laptop.findById(req.params.id)
            res.render('laptop/update', {laptop: laptop})
        }catch(err){
            console.log('No edit')
            next(err)
        }
    },

    // Thêm mới sản phẩm

    createLaptop: async(req, res)=>{
        try{
            const laptop = new Laptop({
                name: req.body.name,
                techSpecs: req.body.techspecs,
                price: req.body.price,
                photo: req.file.filename
            })

            await laptop.save()
            console.log('thêm mới thành công');
            res.redirect('/laptop')

        }catch(err){
            console.log(err)
        }
    },
    // update sản phẩm
    updateLaptop: async(req, res) =>{

    },

    // delete sản phẩm
    deleteLaptop: async(req, res) =>{

    }


}

module.exports = laptopController