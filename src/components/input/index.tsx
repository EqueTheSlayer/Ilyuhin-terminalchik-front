export const Input = (props: {name: string, type: string, max?: number}) => {
  return (
    <input name={props.name} type={props.type} max={props.max}/>
  )
}