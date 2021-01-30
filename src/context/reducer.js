export const initialState = {
  basket: [
    {
      id: 12,
      title:
        "Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)",
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg",
      price: 1075,
    },
    {
      id: 123,
      title:
        "Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)",
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg",
      price: 1075,
    },
  ],
};
// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
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
