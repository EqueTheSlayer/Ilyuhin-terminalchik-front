import styles from './index.module.scss';
import {Input} from "../input";
import React, {KeyboardEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setNewInputCommand} from "../../redux/terminal-input";
import {Commands} from "../../models/Commands";

export const TerminalInput = (props: {onExecuteCommand: React.Dispatch<React.SetStateAction<string[]>>}) => {
  const dispatch = useAppDispatch();

  const getPossibleCommands = (command: string) => {
    if (command !== '') {
      return Object.values<string>(Commands).includes(command.split(' ')[0]);
    }

    return true
  }

  const handleInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const command = event.currentTarget.value.toLowerCase();

      dispatch(setNewInputCommand(command));

      getPossibleCommands(command)
        ? props.onExecuteCommand(prevState => [...prevState, command])
        : props.onExecuteCommand(prevState => [...prevState, 'error']);

      event.currentTarget.value = '';
    }
  }

  // const clearTerminal = () => {
  //
  // }

  return (
    <div className={styles.TerminalInput}>
      <div className={styles.PCName}>ilyuha@DESKTOP-8RCGCSN:</div>
      <Input name={'terminal-main'} type={'text'} placeholder={''} onEnter={handleInput}/>
    </div>
  )
}