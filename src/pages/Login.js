import { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner';
import UserContext from '../context/user/UserContext';

const Login = () => {
  const userContext = useContext(UserContext);
  const { isUserAuthenticated, loginWithEmail, loginWithGoogle } = userContext;

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setEmail('');
    setPassword('');
    loginWithEmail(email, password).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    loginWithGoogle().catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  };

  if (isUserAuthenticated()) {
    return <Redirect to='/mycollection' />;
  } else if (isLoading) {
    return <Spinner message='Authenticating ...' />;
  } else {
    return (
      <form
        className='w-1/3 mx-auto flex flex-col mt-8'
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl font-bold mb-4 text-blue-600'>
          Login{' '}
          <span className='text-sm ml-1 hover:text-blue-800'>
            or <Link to='/signup'>create an account</Link>
          </span>
        </h1>
        {error !== null && (
          <h1 className='text-red-600  text-bold text-lg'>{error}</h1>
        )}
        <label className='mb-2 font-bold text-white' htmlFor='email'>
          Email
        </label>
        <input
          className='mb-4 p-2'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          required
          onChange={handleChange}
        />
        <label className='mb-2 font-bold text-white' htmlFor='password'>
          Password{' '}
          <span className='ml-2 font-bold text-sm text-blue-500 mb-2'>
            Forgot Password?
          </span>
        </label>
        <input
          className='mb-6 p-2 text-black'
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required
          onChange={handleChange}
        />
        <button className='bg-blue-500 text-white text-bold p-2 text-md rounded-lg hover:bg-blue-700 focus:outline-none mb-4'>
          Login
        </button>
        <button
          className='w-full bg-blue-500 text-white p-2 hover:bg-blue-700 rounded-lg mx-auto focus:outline-none'
          onClick={handleGoogleLogin}
        >
          <i className='fab fa-google mr-2' /> Sign In with Google
        </button>
      </form>
    );
  }
};

export default Login;
