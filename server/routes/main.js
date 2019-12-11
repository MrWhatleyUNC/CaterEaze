const router = require('express').Router();
const Menus = require('../models/menu');
const Order = require('../models/orders');
const Recipe = require('../models/recipe')

router.get('/orders', (req,res, next)=>{
    Order
    .find({})
    .populate("mealType", "mealType")
    .sort('EventDate')
    .exec((err, orders)=>{
        if (err) return next(err)
        else
        res.send({orders: orders});
    })
});
//router.get('/recipes', (req, res, next));
router.post('/ingredients/order', (req, res, next)=>{
    let guestCount= req.body.GuestCount;
    if (req.body.orderId) {
        Menus
        .findById(req.body.orderId)
        .populate(
            {path: 'Recipes'})
        .exec((err, menu) =>{
            res.send(createShoppingList(guestCount, menu));
        })
    }
});

function createShoppingList( guestCount, menu){
    console.log(menu.Recipes[0].recipe)
    return {shoppingList: menu.Recipes[0].recipe}
}

// router.post('/ingredient', (req, res, next)=>{
//     if ()
// });
//router.get('recipes', (req, res, next));

router.get('/menus', (req, res, next)=>{
    Menus
    .find()
    .exec((err, menus)=> {
        if (err) return next(err)
        else 
        console.log('menu:',menus);
        res.send(menus);
    })
});

router.post('/orders', (req, res, next)=> {
    let newOrder = new Order()

    newOrder.mealType = req.body.mealType
    newOrder.GuestCount = req.body.GuestCount
    newOrder.OrderDate = new Date()
    newOrder.EventDate = req.body.EventDate

    newOrder.save((err)=>{
        if (err) throw err
    })
    res.end(console.log('Your Order has been submitted'));
});

module.exports = router