import styles from './ErrorComponent.module.css';
import PropTypes from 'prop-types';

export const ErrorComponent = ({error}) => {

  if (!error) {
    return null;
  } 

  return (
    <p className={styles.error}> { error } </p>
  )
}
ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired, 
};
