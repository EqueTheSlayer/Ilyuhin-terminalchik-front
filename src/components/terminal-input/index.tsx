import styles from './index.module.scss';
import {Input} from "../input";
import {ChangeEvent} from "react";

export const TerminalInput = () => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div className={styles.TerminalInput}>
      <div className={styles.PCName}>ilyuha@DESKTOP-8RCGCSN:</div>
      <Input name={'terminal-main'} type={'text'} placeholder={''} onChange={handleInput}/>
    </div>
  )
}