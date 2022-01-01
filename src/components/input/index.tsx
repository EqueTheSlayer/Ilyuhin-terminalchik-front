import {ChangeEvent, KeyboardEvent} from "react";

export const Input = (props:
                        {
                          name: string,
                          type: string,
                          max?: number,
                          step?: number,
                          placeholder: string,
                          onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
                        }
) => {
  return (
    <input
      name={props.name}
      type={props.type}
      max={props.max}
      min={0}
      step={props.step}
      placeholder={props.placeholder}
      onKeyDown={props.onEnter}/>
  )
}