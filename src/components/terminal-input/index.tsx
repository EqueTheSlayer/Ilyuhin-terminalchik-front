import styles from './index.module.scss';
import {Input} from "../input";

export const TerminalInput = () => {
  const handleInput = (e: Event) => {
    console.log(e.target)
  }

  return (
    <div className={styles.TerminalInput}>
      <div className={styles.PCName}>ilyuha@DESKTOP-8RCGCSN:</div>
      <Input name={'terminal-main'} type={'text'} placeholder={''}/>
    </div>
  )
}