import PropTypes from 'prop-types';
import { fields } from './fields';
import useForm from '../../services/hooks/useForm';
import FormTextField from 'components/FormTextField/FormTextField';
import s from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmitClick }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmitClick,
    initialState,
  });
  const { name, number } = state;
  const isActive = name && number.length > 6;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <FormTextField value={name} onChange={handleChange} {...fields.name} />
      <FormTextField
        value={number}
        onChange={handleChange}
        {...fields.number}
      />
      <button type="submit" disabled={!isActive} className={s.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
export default ContactForm;
