import Top10Comp from "@/components/topCountries";
import Link from "next/link";

export default function Rankings(){
    return(
        <>
            <div className="header">
                <h1>Rankings</h1>
                <Link href="/"><p className="nav">HOME</p></Link>
            </div>
            <Top10Comp />
        </>
    )
}