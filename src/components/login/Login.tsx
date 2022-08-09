import {useState} from 'react';
import Error from '../error/Error'
import axios from "axios";
import {loginAsync} from '../../features/login-state/loginStateSlice';
import {useAppDispatch} from '../../app/store';

const Login = () => {

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>):void => {
    setEmail(event.currentTarget.value);
  }

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>):void => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    dispatch(loginAsync({email, password}))
  }

  const showError = () => {
    if (error) {
      return <Error message={error}/>
    }
  }

  return (
    <div>
    {showError()}

    <form onSubmit ={onSubmitForm}>
      <label htmlFor='email'>Email: </label>
      <input type='email' id='email' required onChange={onChangeEmail} />
      <label htmlFor='password'>Password: </label>
      <input type='password' autoComplete='off' id='password' required onChange={onChangePassword} />
      <input type="submit" value='Login'/>
    </form>
    </div>
  )
}

export default Login;
