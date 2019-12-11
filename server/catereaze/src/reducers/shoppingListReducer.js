import { FETCH_ORDER_RECIPES, FETCH_RECIPE_INGREDIENT_NAMES } from '../actions/actions'

const DEFAULT_STATE = {
    shoppingList: [],
    recipes: []
};

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_ORDER_RECIPES:
                if (action.payload) {
                    console.log(action.payload.data.Recipes)
                    let newState = Object.assign({}, state);
                    newState.recipes = [];
                    action.payload.data.Recipes.forEach(dish => {
                        newState.recipes.push(dish);
                    });
                    return newState;
                }
                return state;
        case FETCH_RECIPE_INGREDIENT_NAMES:
                if (action.payload) {
                    console.log(action.payload)
                    console.log(state)
                }
        default:
                return state;
    }
}