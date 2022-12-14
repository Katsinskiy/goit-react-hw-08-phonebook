import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
