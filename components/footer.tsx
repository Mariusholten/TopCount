import Link from "next/link"

export default function footer(){
    const link = "--> GitHub Link <--"
    return(
        <footer className="footer">              
            <p>A global count with a ranking system based on clicks per country.</p>
            <Link href="/rankings">Rankings</Link>
            <Link href="/"> | Home</Link>
            <p>Made by Marius Holten.</p>
            <a href="https://github.com/Mariusholten">
                {link}
            </a>
        </footer>
        
    )
}