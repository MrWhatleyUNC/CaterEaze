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

function createShoppingList( guestCount, menu) {
    let shoppingList= [];
    for (l= 0; l< menu.Recipes.length; l++) {
        console.log(menu.Recipes);
        menu.Recipes[l].recipe.map(i=>(
        shoppingList.push({ingredient: i.ingredient, 
                    quantity: (i.quantity*(guestCount/10)),
                    unit: i.unit}
        )))
    }
    console.log(shoppingList)
    
    for (l=0; l< shoppingList.length; l++) {
        if (shoppingList[l].unit == 'oz') {
            console.log(shoppingList[l].ingredient,'unit needs conversion from', shoppingList[l].unit,'to lbs');
            console.log('quantity in oz', shoppingList[l].quantity);
            shoppingList[l].quantity = shoppingList[l].quantity/16;
            console.log('quantity in lbs', shoppingList[l].quantity);
            shoppingList[l].unit = 'lbs';
        }
    }

    for (l=0; l< shoppingList.length; l++) {
        if (shoppingList[l].unit != 'oz') {
            console.log(shoppingList[l].ingredient,'unit needs conversion from', shoppingList[l].unit);
            if(shoppingList[l].unit == 'tbsp'){
                console.log('quantity in tbsp',shoppingList[l].quantity);
                shoppingList[l].quantity = shoppingList[l].quantity/2;
                console.log('quantity in oz',shoppingList[l].quantity);
                shoppingList[l].unit = 'oz';
            }else if (shoppingList[l].unit == 'tsp'){
                console.log('quantity in tsp',shoppingList[l].quantity);
                shoppingList[l].quantity = shoppingList[l].quantity/6;
                console.log('quantity in oz',shoppingList[l].quantity);
            }
        }
        else console.log('all units in oz or lbs');
    }
    console.log('shopping list w/ converted units:', shoppingList);
    return {shoppingList: shoppingList};
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