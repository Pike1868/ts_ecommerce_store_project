import { Outlet } from "react-router-dom"
import { Header, Navbar } from "@/components"

export default function HomeLayout() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="py-20 align-element">
    <Outlet></Outlet>
    </div>
    </>
  )
}
