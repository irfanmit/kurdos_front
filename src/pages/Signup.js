import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <>
    <div style={styles.container}>
      <h1>Sign-Up</h1>
    </div>
      <SignupForm />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
};

export default Signup;
