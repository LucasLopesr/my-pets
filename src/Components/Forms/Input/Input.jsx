import styles from './Input.module.css';

const Input = ({ label, type, id, value, onChange, errorMessage, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input 
        id={id} 
        name={id} 
        className={styles.input} 
        type={type} 
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      /> 
      {errorMessage && <p className={styles.error}> {errorMessage}</p>}
    </div>
  )
}

export default Input