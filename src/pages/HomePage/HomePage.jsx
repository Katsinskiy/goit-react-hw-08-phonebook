import phonebook from '../../assets/img/phonebook.png';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <h3 className={s.title}>Welcome </h3>
      <p className={s.title}>
        Please, <b>Register</b> or <b>Sign in</b> to have access to the
        Phonebook!
      </p>
      <img src={phonebook} width="300" alt="phonebook" className={s.img} />
    </main>
  );
};

export default HomePage;
