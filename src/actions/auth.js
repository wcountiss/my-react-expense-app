import { firebase, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) =>{
      console.log(result);
    });
    
  };
};

export const twitterLogin = () => { 
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