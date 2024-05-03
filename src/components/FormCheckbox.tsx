import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"

type FormCheckboxProps = {
    name:string,
    label?:string,
    defaultValue?:string,
}

export default function FormCheckbox({name, label, defaultValue}:FormCheckboxProps) {
  const defaultChecked = defaultValue === "on" ? true : false
  
    return (
    <div className="flex self-end justify-between m-2">
      <Label htmlFor={name} className="capitalize">
          {label || name}
      </Label>
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultChecked}
      />
    </div>
  )
}