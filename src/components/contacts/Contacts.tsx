import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Contact from '../contact/Contact';
import './Contacts.css';

const Contacts = () => {
  const { contacts } = useSelector((state: RootState) => state.contacts)
  console.log(`contacts: ${contacts}`);

  return (
    <>
      <h3 className='contacts-title'>Контакты</h3>
      <div className='contacts-header'>
          <p>Имя</p>
          <p>Фамилия</p>
          <p>Телефон</p>
      </div>
      <ul className='contacts-container'>
        {contacts.map((item, index) => <Contact key={item.id} user={item} />)}
      </ul>
    </>
  )
}

export default Contacts;
