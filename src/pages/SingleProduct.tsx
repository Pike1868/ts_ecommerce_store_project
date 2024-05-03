import { useLoaderData, Link } from "react-router-dom"
import { customFetch, formatAsDollars, type SingleProductResponse } from "@/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { type LoaderFunction } from "react-router-dom"

import { SelectProductAmount, SelectProductColor } from "@/components"

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
    <h1 className="text-4xl">Single Product</h1>
  )
}
