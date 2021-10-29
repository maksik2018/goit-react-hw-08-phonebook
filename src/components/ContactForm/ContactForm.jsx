import { useState} from 'react';
import nextId from "react-id-generator";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts-selectors';
import {addContact} from '../../redux/contacts-operations';
import s from './ContactForm.module.css';

export default function Contactform() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const onChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default: return;
    };
  };

  const resetinput = () => {
    setName('');
    setPhone('');


  }

  const checkRepeatName = name => {
    return contacts.find(contact => contact.name && contact.name.toLowerCase() === name.toLowerCase())
  };

  const checkRepeatPhone = number => { return contacts.find(contact => contact.number === number) };

  const handleSubmit = event => {
    event.preventDefault();
       
    if (checkRepeatName(name)) {
      alert(`${name} is already added.`)
    }
    else if (checkRepeatPhone(number)) {
      alert(`${number} is already added.`)
    }
    else if (name.trim() === '' || number.trim() === '') {
      alert('All of inputs must be not empty')
    }
    else {
      dispatch(addContact(name, number));
    }
    resetinput();

        
  };
    
  const nameInputId = nextId();
  const phoneInputId = nextId();

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="indicate your name"
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onChange}
        id={nameInputId}
      />
      <input
        placeholder="indicate your phone number"
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={onChange}
        id={phoneInputId}
      />
      <button className={s.button}type='submit'>
        {/* {isCreating && <Spinner size={20} />} */}
        Add contact</button>
        
    </form>
  );
}