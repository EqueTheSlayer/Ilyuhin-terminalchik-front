export const Input = (props: {name: string, type: string, max?: number, step?: number}) => {
  return (
    <input name={props.name} type={props.type} max={props.max} min={0} step={props.step}/>
  )
}