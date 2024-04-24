import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Cart() {
  return (
    <div>
        <h1 className='text-4xl'>Cart Page</h1>
       
       <div>
       <Button asChild size="lg"> 
       <Link to="/" className="m-3 text-xl bg-green-600">
          Home
        </Link>
        </Button>
       
       </div>
    </div>
  )
}
