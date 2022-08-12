import {useState} from 'react';
import './Filter.css';

const Filter = () => {

  const [filterValue, setFilterValue] = useState('');

  const changeFilterValue = (event : React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  }

  return (
    <section className='filter-container'>
      <input className='filter-input' type='text' value={filterValue} onChange={changeFilterValue} />
    </section>
  )
}

export default Filter;
