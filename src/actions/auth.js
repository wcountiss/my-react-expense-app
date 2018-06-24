import { firebase, googleAuthProvider, twitterAuthProvider, facebookAuthProvider } from '../firebase/firebase';

//
export const login = (user) => ({
  type: 'LOGIN',
  uid: user.uid,
  displayName: user.displayName || undefined,
  photoURL: user.photoURL || undefined
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