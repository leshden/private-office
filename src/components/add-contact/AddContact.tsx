import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../app/store';
import { addAsync } from '../../features/contacts/contactsStateSlice';
import './AddContact.css';

const AddContact = () => {
  const { email } = useSelector((state: RootState) => state.login)
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  const resetValues = () => {
    setName('');
    setSurname('');
    setPhone('');
  }

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    dispatch(addAsync({ email, name, surname, phone}));
  }

  const onChangeName = (event: React.FormEvent<HTMLInputElement>):void => {
    setName(event.currentTarget.value);
  }
  const onChangeSurname = (event: React.FormEvent<HTMLInputElement>):void => {
    setSurname(event.currentTarget.value);
  }
  const onChangePhone = (event: React.FormEvent<HTMLInputElement>):void => {
    setPhone(event.currentTarget.value);
  }

  return (
    <form className='add-contact-container' onSubmit ={onSubmitForm}>
      <label htmlFor="add-name">Имя:</label>
      <input className='add-contact-input' id='add-name' type='text' value={name} required onChange={onChangeName} />
      <label htmlFor="add-surname">Фамилия:</label>
      <input className='add-contact-input' id='add-surname' type='text' value={surname} required onChange={onChangeSurname} />
      <label htmlFor="add-phone">Телефон:</label>
      <input className='add-contact-input' id='add-phone' type='text' value={phone} required onChange={onChangePhone} />
      <button className='add-contact-button'>Добавить</button>
    </form>
  )
}

export default AddContact;
