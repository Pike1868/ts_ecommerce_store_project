import { useRouteError } from "react-router-dom"

export default function ErrorElement() {
    const error = useRouteError()
    console.log(error)
  return (
    <h4 className="text-4xl font-bold">There was an error...</h4>
  )
}