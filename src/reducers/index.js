
const initialState = {
  loading: true,
  error:null,
  cartItems: [
    {
      id:1,
      name:'Oleg',
      count: 33,
      total: 25
    },
    {
      id:2,
      name:'Squier',
      count: 33,
      total: 25
    }
  ],
  orderTotal: 0,
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