const {Order} = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController{

  async addProduct(req, res, next) {
    try {
    let {productId, basketId} = req.body;

    const order = await Order.create({basketId, productId});
    return res.json(order);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let {basketId} = req.query;
    let orders;
    
    try{
      orders = await Order.findAll({where: {basketId : basketId}})      
      return res.json(orders);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res) {
    const {id} = req.query;
    
    if (id) {
      Order.destroy({
        where: {id:id}
      })
      .then(() => {
        res.status(200).json({msg:"Product deleted"});
      })
      .catch(err => {
        res.status(500).json({msg:"Error"});
      })
    } else {
      Order.destroy({
        where: {},
        truncate: false,
      })
      .then(() => {
        res.status(200).json({msg:"Order confirmed"});
      })
      .catch(err => {
        res.status(500).json({msg:"Error"});
      })
    }
  }
  
}

module.exports = new BasketController();