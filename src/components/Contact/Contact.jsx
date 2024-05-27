import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.wrapper}>
        <h3 className={css.title}>
          <RiContactsFill className={css.icon} />
          {name}
        </h3>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
