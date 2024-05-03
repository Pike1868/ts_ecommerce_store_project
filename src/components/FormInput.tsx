import { useLoaderData } from "react-router-dom"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

type FormInputProps = {
    name:string,
    type:string,
    label?:string,
    defaultValue?:string,
}

export default function FormInput({label, name, type, defaultValue}:FormInputProps) {
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize"> {label || name} </Label>
        <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  )
}