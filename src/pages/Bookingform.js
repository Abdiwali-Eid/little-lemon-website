import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';

import Success from '../components/Success';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
     
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Success />
        )}
      </div>
    </>
  );
};

export default Form;
