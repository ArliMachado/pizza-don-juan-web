/**
 * Action Types
 */

export const Types = {
  REQUEST: 'order/REQUEST',
  SUCCESS: 'order/SUCCESS',
  FAILURE: 'order/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = { data: [], loading: false, user: {} };

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data.orders,
        user: action.payload.data.user,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  orderRequest: () => ({
    type: Types.REQUEST,
  }),
  orderSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
};
