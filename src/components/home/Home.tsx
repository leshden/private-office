import { useSelector } from 'react-redux'
import { RootState } from '../../app/store';
import { Link } from "react-router-dom";

const Home = () => {

  const { login } = useSelector((state: RootState) => state.login)

  const logiOrNot = () => {
    if (login) {
      return (
        <p>Вы залогинены.</p>
      );
    } else {
      return (
        <div>
          <p>Вы не залогинены</p>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }

  return logiOrNot();
}

export default Home;
