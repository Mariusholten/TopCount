import TopComp from "@/components/topCountries";
import Link from "next/link";

export default function Rankings(){
    return(
        <>
            <div className="header">
                <h1>Rankings</h1>
                <Link href="/"><p className="nav">Home</p></Link>
                <Link href="/about"><p className="nav">About</p></Link>
            </div>
            <p className="text">Current country clicks:</p>
            <TopComp />
        </>
    )
}