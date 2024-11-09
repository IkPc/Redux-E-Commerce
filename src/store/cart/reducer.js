import { ADD_ITEM, REMOVE_ITEM } from './actions';


const initialState = {
  items: [],
  totalQuantity: 0,
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);


      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
        };
      }


    case REMOVE_ITEM:
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);


      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(item => item.id !== id),
            totalQuantity: state.totalQuantity - 1,
          };
        } else {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ),
            totalQuantity: state.totalQuantity - 1,
          };
        }
      }
      return state;


    default:
      return state;
  }
};


export default cartReducer;