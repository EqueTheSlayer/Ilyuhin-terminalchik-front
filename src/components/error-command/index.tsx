export const ErrorCommand = (props: {command: string}) => {
  return (
    <div>
      {props.command}: command not found
    </div>
  )
}