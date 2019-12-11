import axios from 'axios';
export const FETCH_MENUS = 'fetch_menus';
export const CHANGE_MENU = 'change_menu';
export const CHANGE_GUEST = 'change_guest';
export const SELECT_DATE = 'select_date';
export const CREATE_ORDER = 'create_order';
export const FETCH_ORDERS = 'fetch_orders';
export const FETCH_ORDER_RECIPES = 'fetch_order_recipes';
export const FETCH_RECIPE_INGREDIENT_NAMES = 'fetch_recipe_ingredient_names'
const ROOT_URL = 'http://localhost:5000';

export function fetchMenus() {
    const request = axios
        .get(`${ROOT_URL}/menus`)
        .catch(function(error) {
            console.log('error: ', error)
    })

    console.log(request)
    return {
        type: FETCH_MENUS,
        payload: request
    }
}

export function fetchOrders() {
    const request = axios
        .get(`${ROOT_URL}/orders`)
        .catch(function(error) {
            console.log('error: ', error)
    })

    console.log(request)
    return {
        type: FETCH_ORDERS,
        payload: request
    }
}

export function fetchOrderRecipes(order){
    console.log(order);
    const request = axios
    .post(`${ROOT_URL}/ingredients/order`, order)
    .catch(function(error){
        console.log(error);
    })
    console.log(request);
    return {
        type: FETCH_ORDER_RECIPES,
        payload: request
    }
}

export function fetchRecipeIngredientNames(RecipeIngredientId){
    console.log(RecipeIngredientId);
    const request = axios
    .post(`${ROOT_URL}/ingredients`, RecipeIngredientId)
    .catch(function(error){
        console.log(error);
    })
    console.log(request);
    return {
        type: FETCH_RECIPE_INGREDIENT_NAMES,
        payload: request
    }
}

export function createOrder(order){
    const request = axios
        .post(`${ROOT_URL}/orders`, order)
        .catch(function(error){
            console.log('error:', error);
        })
    console.log(request);
    return {
        type: CREATE_ORDER,
        payload: request
    }
}

export function changeMenu(menuId) {
    console.log('menu:', menuId);
    return {
        type: CHANGE_MENU,
        payload: menuId
    }   
}

export function changeGuest(guests){
    console.log('guests:',guests);
    return {
        type: CHANGE_GUEST,
        payload: guests
    }
}

export function selectDate(eventDate){
    console.log('Event date:', eventDate);
    return {
        type: SELECT_DATE,
        payload: eventDate
    }
}