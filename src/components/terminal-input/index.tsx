import styles from './index.module.scss';
import {Input} from "../input";
import {ChangeEvent, KeyboardEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setNewInputCommand} from "../../redux/terminal-input";

export const TerminalInput = () => {
  const dispatch = useAppDispatch();
  const handleInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setNewInputCommand(event.currentTarget.value.toLowerCase().split(' ')));
      event.currentTarget.value = '';
    }
  }

  return (
    <div className={styles.TerminalInput}>
      <div className={styles.PCName}>ilyuha@DESKTOP-8RCGCSN:</div>
      <Input name={'terminal-main'} type={'text'} placeholder={''} onEnter={handleInput}/>
    </div>
  )
}