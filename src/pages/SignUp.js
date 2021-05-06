import { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner';
import UserContext from '../context/user/UserContext';

const SignUp = () => {
  const { signup, isUserAuthenticated } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === 'email') {
      setEmail(e.target.value);
    } else if (name === 'password') {
      setPassword(e.target.value);
    } else {
      setPassword2(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setEmail('');
    setPassword('');
    setPassword2('');
    signup(email, password).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  };

  if (isUserAuthenticated()) {
    return <Redirect to='/mycollection' />;
  } else if (isLoading) {
    return <Spinner message='Creating Account' />;
  } else {
    return (
      <form
        className='container flex flex-col px-4 sm:w-1/2 mx-auto my-8'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold mb-2 text-blue-600'>
          Create An Account{' '}
          <span className='text-sm ml-1 hover:text-blue-800'>
            or <Link to='/login'>sign in</Link>
          </span>
        </h1>
        {error && <h1 className='text-red-600 text-lg mb-2'>{error}</h1>}
        <label className='mb-2 font-bold text-white' htmlFor='email'>
          Email
        </label>
        <input
          className='mb-4 p-2'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <label className='mb-2 font-bold text-white' htmlFor='password'>
          Password
        </label>
        <input
          className='mb-4 p-2 text-black'
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        <label className='mb-2 font-bold text-white' htmlFor='password2'>
          Confirm Password
        </label>
        <input
          className='mb-6 p-2 text-black'
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={handleChange}
          required
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 '
        >
          Sign Up
        </button>
      </form>
    );
  }
};

export default SignUp;
