const initialState = {
  loading: true,
  error:null,
  itemdata: null,
  cartItems: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ITEMS_REQUESTED':
      return {
        ...state,
        loading:true,
        error:null,
    };
    case 'FETCH_ITEMS_ERROR':
      return {
        ...state,
        loading:false,
        error:action.payload,
    };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        cartItems: action.payload, 
        loading:false,
        error:null,
    };
    case 'SUBMIT_FORM':
      return {
        ...state,
        loading:true,
        error:null,
      };
    case 'FETCH_ITEMDATA':
      return {
        ...state,
        itemdata: action.payload,
      };
    case 'EDIT_SUBMIT_FORM':
      const inx = state.cartItems.findIndex((item)=> item.id === action.payload.id);
      const newItemDec ={
        ...action.payload
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0 , inx),
            newItemDec,
          ...state.cartItems.slice(inx + 1),
          
        ],
        itemdata: null, 
    };
    case 'CLEAR_ITEM_DATA':
      return {
        ...state,
        itemdata: null, 
    };
    default:
      return state;
  }

};

export default reducer;