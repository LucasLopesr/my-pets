import styles from './Input.module.css';

const Input = ({ label, type, id }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input id={id} name={id} className={styles.input} type={type} /> 
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input