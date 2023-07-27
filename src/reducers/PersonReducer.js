export const initialState = {
    name: '',
    id: '',
    loading: false,
    error: null,
  };

  export const personReducer = (state, action) => {
    switch (action.type) {
      case 'REQUEST SENT':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'REQUEST_SUCCESS':
        return {
          ...state,
          name: action.payload.name,
          id: action.payload.id,
          loading: false,
        };
      case 'REQUEST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };