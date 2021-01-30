export const initialState = {
  basket: [],
  user: null,
};
// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: [...newBasket],
      };
    default:
      return state;
  }
};

export default reducer;
