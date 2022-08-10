import Contact from '../contact/Contact';
import './Contacts.css';

const Contacts = () => {
  const arr = Array(3).fill(10);
  return (
    <ul className='contacts-container'>
      {arr.map((item, index) => <Contact key={index} />)}
    </ul>
  )
}

export default Contacts;
