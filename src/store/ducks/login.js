/**
 * Action Types
 */

export const Types = {
  REQUEST: 'login/REQUEST',
  SUCCESS: 'login/SUCCESS',
  FAILURE: 'login/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = { loading: false, error: false, message: '' };

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true, error: false };

    case Types.SUCCESS:
      return { ...state, loading: false, error: false };
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.data,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  loginRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),
  loginSUCCESS: () => ({
    type: Types.SUCCESS,
  }),
  loginFailure: data => ({
    type: Types.FAILURE,
    payload: { data },
  }),
};
