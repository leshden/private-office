import {useState} from 'react';
import {ContactUser} from '../../interfaces/Contact';
import './Contact.css';

type Props = {
  user: ContactUser;
}

const Contact = ({user}: Props) => {
  const {name, surname, phone} = user;

  const [edit, setEdit] = useState(false);
  const [nameValue, setNameValue] = useState(name);

  const editOnClick = () => {
    setEdit(!edit);
    setNameValue(name);
  }

  const editName = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  }

  const showAcceptBtn = () => {
    if (edit) {
      return <button className='contact-accept-btn'>Принять</button>
    }
  }

  const nameClasses = `contact-input ${edit ? 'contact-input-write' : 'contact-input-read'}`;
  const editBtnStr = edit ? 'Отменить' : 'Редактировать';

  return (
    <li className='contact-container'>
      <input className={nameClasses} type='text' value={nameValue}  disabled={!edit} onChange={editName} />
      <input className={nameClasses} type='text' value={surname} disabled={!edit}/>
      <input className={nameClasses} type='text' value={phone} disabled={!edit}/>
      <div className='contact-container-btn'>
        <button className='contact-edit-btn' onClick={editOnClick}>{editBtnStr}</button>
        { showAcceptBtn() }
      </div>
      <button>Удалить</button>
    </li>
  )
}

export default Contact;
