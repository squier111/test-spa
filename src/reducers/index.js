const initialState = {
  loading: true,
  error:null,
  cartItems: [],
  newItem: {
    name: '',
    email: ''
  },
};

const reducer = (state = initialState, action) => {

  console.log(state);

  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      console.log(action.payload);
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
          name: action.payload,
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
        loading:true,
        error:null,
      };
    default:
      return state;
  }

};

export default reducer;