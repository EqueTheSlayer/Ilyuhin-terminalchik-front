import styles from './index.module.scss';

export const Loading = () => {
  return (
    <div className={styles.Terminal}>
      <p className={styles.Delay1}>Booting up...</p>
      <p className={styles.Delay2}>DONE</p>
      <p className={styles.Delay3}>Preparing content...</p>
      <p className={styles.Delay4}>DONE</p>
    </div>
  )
}
