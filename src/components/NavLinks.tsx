import {links} from "@/utils";
import {NavLink} from "react-router-dom"

console.log
export default function NavLinks() {
  return (
  <div className="items-center justify-center hidden md:flex gap-x-4">
    {links.map((link)=>{
        return (<NavLink
         to={link.href} 
         key={link.label} 
         className={({isActive}) => {
          return `capitalize  tracking-wide ${
            isActive ? "text-primary":""}`;
        }}>
          {link.label}
        </NavLink>)
      })}
  </div>
  )
}