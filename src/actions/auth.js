import { firebase, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase';


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
  console.log('clicked!');
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider);
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