/**
 * Action Types
 */

export const Types = {
  REQUEST: 'login/REQUEST',
  SUCCESS: 'login/SUCCESS',
  LOGOUT: 'login/LOGOUT',
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
    case Types.LOGOUT:
      return INITIAL_STATE;
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
  logoutRequest: () => ({
    type: Types.LOGOUT,
  }),
  loginFailure: data => ({
    type: Types.FAILURE,
    payload: { data },
  }),
};
