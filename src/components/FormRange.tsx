import { formatAsDollars } from "@/utils"
import { useState } from "react"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"

type FormRangeProps = {
  name:string,
  label?:string,
  defaultValue?:string,
}

export default function FormRange({name, label, defaultValue}:FormRangeProps){
  //this will be the step in cents for the slider
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue): maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice)


  return (
    <div className="mb-2">
      <Label htmlFor={name} className="flex justify-between capitalize">
        {label || name}
      </Label>
      <span>{formatAsDollars(selectedPrice)}</span>
      <Slider id={name} name={name} step={step} max={maxPrice}  value={[selectedPrice]} 
        onValueChange={(value)=>{
        setSelectedPrice(value[0])
        }} 
        className="mt-4">
        {defaultPrice}
      </Slider>
    </div>
  )
}