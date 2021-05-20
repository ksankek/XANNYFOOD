const uuid = require('uuid');
const path = require('path');
const {Product, ProductInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController{

  async create(req, res, next){
    try{
      const {name, price, sale, weight, struct, typeId} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const product = await Product.create({name, price, sale, weight, struct, typeId, img: fileName});
      
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next){
    let {typeId} = req.query;
    let products;
    
    try{
      if (!typeId) {
        products = await Product.findAll();
      }
      else{
        products = await Product.findAll({where: {typeId: typeId}})
      }
      
      return res.json(products);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next){
    const {id} = req.query;
    const {name, price, sale, weight, struct, typeId} = req.body;
    let fileName;

    if (req.files){
      const {img} = req.files;
      fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
    }
    else{
      fileName = Product.img;
    }

    Product.update({
      name: `${name}`,
      price: `${price}`,
      typeId: `${typeId}`,
      weight: `${weight}`,
      struct: `${struct}`,
      img: `${fileName}`,
    }, 
      { where: {id:id}})
      .then(() => {
        res.status(200).json({msg:"Product updated"});
      })
      .catch(err => {
        res.status(500).json({msg:"Error"});
      })
  }

  async delete(req, res, next){
    const {id} = req.query;
    
    Product.destroy({
      where: {id:id}
    })
    .then(() => {
      res.status(200).json({msg:"Product deleted"});
    })
    .catch(err => {
      res.status(500).json({msg:"Error"});
    })
  }

}

module.exports = new ProductController();