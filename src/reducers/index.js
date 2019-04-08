
const initialState = {
  loading: true,
  error:null,
  cartItems: [],
};

const reducer = (state = initialState, action) => {

  // console.log(action.type);

  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        cartItems: action.payload, 
        loading:true,
        error:null,
      };
    default:
      return state;
  }

};

export default reducer;