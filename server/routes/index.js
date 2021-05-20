const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);

module.exports = router;