import { CartButton, LinksDropdown, Logo, ModeToggle, NavLinks} from "."

export default function Navbar() {
  return (
    <nav className="py-4 bg-muted">
        <div className="flex items-center justify-between align-element">
        <Logo/>
        <LinksDropdown/>
        <NavLinks/>

        <div className="flex items-center justify-center gap-x-4">
            <ModeToggle/>
            <CartButton />
        </div>
        
        </div>
    </nav>
  )
}