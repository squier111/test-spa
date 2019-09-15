const initialState = {
  loading: true,
  isValid: false,
  error:null,
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
        isValid: false,
        orderId: null,
        loading:true,
        error:null,
    };
    default:
      return state;
  }

};

export default reducer;