import { useState } from 'react';

function validateEmail(email) {
  
  return /^[^\s@]+@[^\s@]+\.(com|edu|np|org)$/i.test(email);
}

export default function login() {
 
  const [values, setValues] = useState({ email: '', password: '' });

 
  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  
  const [shake, setShake] = useState(false);

 
  function handleChange(e) {
    const { name, value } = e.target;

   
    setValues((prev) => ({ ...prev, [name]: value }));

    
    setErrors((prev) => ({ ...prev, [name]: undefined }));

    
    if (name === 'email') {
      if (!value) {
        setErrors((prev) => ({ ...prev, email: 'Email is required' }));
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      }
    }
  }

  
  function validate() {
    const newErrors = {};

    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!values.password) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 6) {
      newErrors.password = 'Password must be at least six characters';
    }

    return newErrors;
  }

 
  function handleSubmit(e) {
    e.preventDefault(); 

    const validationErrors = validate(); 

    setErrors(validationErrors); 

    
    if (validationErrors.password) {
      setShake(true);
      setTimeout(() => setShake(false), 500); 
    }

  
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <div className="main">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          className={
            errors.email
              ? 'error'
              : values.email && !errors.email
              ? 'valid'
              : ''
          }
        />
        {errors.email && <span className="error">{errors.email}</span>}

       
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          className={`password-input${errors.password ? ' error' : ''}${
            shake ? ' shake' : ''
          }`}
        />
        {errors.password && <span className="error">{errors.password}</span>}

    
        <input type="submit" value="Login" />

    
        {submitted && (
          <div style={{ color: 'green', marginTop: 10 }}>
            🎉 Login successful!
          </div>
        )}
      </form>
    </div>
  );
}
