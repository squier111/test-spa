const initialState = {
  loading: true,
  isValid: false,
  error:null,
  cartItems: [],
  newItem: {
    customer: '',
    email: ''
  },
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        cartItems: action.payload, 
        loading:true,
        error:null,
      };

      case 'FETCH_NAME_FORM':
      return {
        ...state,
        newItem: {
          ...state.newItem,
          customer: action.payload,
        },
        loading:true,
        error:null,
      };


      case 'FETCH_EMAIL_FORM':
      return {
        ...state,
        newItem: {
          ...state.newItem,
          email: action.payload,
        },
        loading:true,
        error:null,
      };


      case 'SUBMIT_FORM':
      return {
        ...state,
        newItem: {},
        isValid: false,
        loading:true,
        error:null,
      };
    default:
      return state;
  }

};

export default reducer;