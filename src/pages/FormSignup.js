import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Reservation Table <br/><span style={{fontWeight:'lighter'}}>Little Lemon</span> </h1>
       
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Telephone</label>
          <input
            className='form-input'
            type='tel'
            name='telephone'
            placeholder='Enter your telephone'
            value={values.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Occasion</label>
          <select name="occasion"   className='form-input' >
                  <option value="select">Select occasion</option>
                 <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
        
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Guests</label>
          <input
            className='form-input'
            type='number'
            name='Guests'
            placeholder='Enter your Guests'
            value={values.Guests}
            onChange={handleChange}
          />
          {errors.Guests && <p>{errors.Guests}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Date & Time</label>
          <input
            className='form-input'
            type='datetime-local'
            name='datee'
            // placeholder='Enter your age'
            value={values.datee}
            onChange={handleChange}
          />
          {errors.datee && <p>{errors.datee}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
        Make Reservation
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
