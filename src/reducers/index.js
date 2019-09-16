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
      return {
        ...state,
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