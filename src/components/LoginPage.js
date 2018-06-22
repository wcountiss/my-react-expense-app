import React from 'react';
import { connect } from 'react-redux';
import { startLogin, twitterLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, twitterLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Tracker</h1>
      <p>Get your expenses under control by tracking them</p>
      <p><button className="button--google" onClick={startLogin}>Login with Google</button></p>
      <p><button className="button--twitter" onClick={twitterLogin}>Login with Twitter</button></p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  twitterLogin: () => dispatch(twitterLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
