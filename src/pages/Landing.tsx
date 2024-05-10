import {Hero, FeaturedProducts} from "@/components"
import { type LoaderFunction } from "react-router-dom";
import {customFetch, type ProductsResponse} from "@/utils"

const url = "/products?featured=true"

export const loader:LoaderFunction = async():Promise<ProductsResponse>=>{
  const response = await customFetch<ProductsResponse>(url)
  // console.log(response);
  return {...response.data};
 }

export default function Landing() {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}
