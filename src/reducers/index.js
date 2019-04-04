
const initialState = {
  books:[],
  loading: true,
  error:null,
  cartItems: [],
  orderTotal: 0,
};

const reducer = (state = initialState, action) => {

  // console.log(action.type);

  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [], 
        loading:true,
        error:null,
      };
    default:
      return state;
  }

};

export default reducer;