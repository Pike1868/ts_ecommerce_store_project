import { useLoaderData, Link , type LoaderFunction } from "react-router-dom"
import { customFetch, formatAsDollars, type SingleProductResponse } from "@/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SelectProductAmount, SelectProductColor } from "@/components"
import { Mode } from "@/components/SelectProductAmount"

export const loader:LoaderFunction = async({params}):Promise<SingleProductResponse> =>{
  const response = await customFetch<SingleProductResponse>(`/products/${params.id}`);
  
  return {...response.data};
};

export default function singleProduct() {
  const {data:product} = useLoaderData() as SingleProductResponse;
   const {image, title, price, description, colors, company} = product.attributes;
   const dollarsAmount = formatAsDollars(price)
   const [productColor, setProductColor] = useState(colors[0])
   const [amount, setAmount] = useState(1)
   
  const addToCart = () => {
    console.log("add to cart feature soon....")
  }

  return (
    <section>
      <div className="flex items-center h-6 gap-x-2">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical"/>
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>

      {/**PRODUCT */}
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/** PRODUCT IMAGE - FIRST COLUMN */}
        <img src={image} alt={title} className="object-cover rounded-lg w-96 h-96 lg:w-full"/>
        {/**PRODUCT INFO - SECOND COLUMN */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl">{company}</h4>
          <p className="inline-block p-2 mt-3 font-bold rounded-md text-md bg-muted" >
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          {/**COLORS */}
          <SelectProductColor colors={colors} productColor={productColor} setProductColor={setProductColor}/>
          {/**AMOUNT */}
          <SelectProductAmount mode={Mode.SingleProduct} amount={amount} setAmount={setAmount}/>
          {/**CART */}
          <Button size="lg" className="mt-10 capitalize" onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  )
}
