import { firebase, googleAuthProvider, twitterAuthProvider, facebookAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
    
  };
};

export const twitterLogin = () => { 
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider);
  }
}

export const facebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};