
import { GET_PRODUCTS, ADD_PRODUCT, PRODUCT_ERROR, REMOVE_PRODUCT_SUCCESS, ADD_USER, REMOVE_USER } from '../actions/actionTypes';

const initialState = {
  products: [],
  loading: true,
  error: {},
  connectedUsers: []
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
               
      };
    case ADD_PRODUCT:
      return {
        ...state
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
      case REMOVE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
        case ADD_USER:
          const newUser = {
            id: action.payload.id,
            name: action.payload.name
          }
          return {
            ...state,
            connectedUsers: [...state.connectedUsers, newUser],
          };
        case REMOVE_USER:
          return {
            ...state,
            connectedUsers: []
          };
          
    default:
      return state;
  }
};

