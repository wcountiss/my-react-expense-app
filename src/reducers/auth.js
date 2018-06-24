export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName || undefined,
        photoURL: action.photoURL || undefined
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
//