const Login = () => {

  const handleOnSubmit = (event: any) => {
    event.preventDefault();;
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  }

  return (
    <form onSubmit ={handleOnSubmit}>
      <label htmlFor='email'>Email: </label>
      <input type='email' id='email' required />
      <label htmlFor='password'>Password: </label>
      <input type='password' autoComplete='off' id='password' required />
      <input type="submit" value='Login'/>
    </form>
  )
}

export default Login;
