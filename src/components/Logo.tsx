import { Link } from "react-router-dom";
import { useAppSelector } from '../store'; 

export default function Logo() {
    const theme = useAppSelector((state) => state.themeState.theme);

    return (
        <Link to="/" className="items-center justify-center hidden w-16 h-16 rounded-lg md:flex">
            <img 
                src={theme === "light" ? "/syntax_threads_logo.svg" : "/syntax_threads_logo_dark.svg"}
                alt="Syntax Threads Logo" 
                className="object-contain w-full h-full " 
            />
        </Link>
    );
}
