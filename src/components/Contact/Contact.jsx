import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <h3 className={css.title}>
          <RiContactsFill size={22} />
          {name}
        </h3>
        <p className={css.number}>
          <FaPhoneAlt size={22} />
          {number}
        </p>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
