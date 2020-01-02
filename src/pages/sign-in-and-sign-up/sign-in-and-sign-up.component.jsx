import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

// SignIn component is rendered from signin.component.jsx
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;