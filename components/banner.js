import styles from './banner.module.css';
const Banner = (props) => {
  const { buttonText, handleOnClick } = props;
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffe shop!</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};
export default Banner;
