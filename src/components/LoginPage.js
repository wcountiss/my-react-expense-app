import React from 'react';
import { connect } from 'react-redux';
import { startLogin, twitterLogin, facebookLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, twitterLogin, facebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Tracker</h1>
      <p>Get your expenses under control by tracking them</p>
      <section className="box-layout__buttons">
        <p><button className="button--google" onClick={startLogin}>Login with Google</button></p>
        <p><button className="button--twitter" onClick={twitterLogin}>Login with Twitter</button></p>
        <p><button className="button--facebook" onClick={facebookLogin}>Login with FaceBook</button></p>
      </section>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  twitterLogin: () => dispatch(twitterLogin()),
  facebookLogin: () => dispatch(facebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
