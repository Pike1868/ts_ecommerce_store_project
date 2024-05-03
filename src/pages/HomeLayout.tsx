import { Outlet, useNavigation } from "react-router-dom"
import { Header, Navbar, Loading } from "@/components"

export default function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading";
  
  return (
    <>
    <Header/>
    <Navbar/>
    
    <div className="py-20 align-element">
    {isPageLoading ? <Loading />:<Outlet />}
    
    </div>
    </>
  )
}
