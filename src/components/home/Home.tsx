import { useSelector } from 'react-redux'
import { RootState } from '../../app/store';
import { Link } from "react-router-dom";
import Contacts from '../contacts/Contacts';
import Filter from '../filter/Filter';

const Home = () => {

  const { login } = useSelector((state: RootState) => state.login)

  const loginOrNot = () => {
    if (login) {
      return (
        <>
        <Filter />
        <Contacts />
        </>
      );
    } else {
      return (
        <div>
          <p>Для входа в <strong>Личный кабинет</strong> необходима <Link to='/login'>Авторизация</Link></p>
          <p>Если у вас еще нет аккаунта, то нужна <Link to='/register'>Регистрация</Link> </p>
        </div>
      );
    }
  }

  return loginOrNot();
}

export default Home;
