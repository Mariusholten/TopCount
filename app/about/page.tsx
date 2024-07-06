import Link from "next/link";

export default function About(){
    return(
        <>
            <div className="header">
                <h1>About TopCount</h1>
                <Link href="/"><p className="nav">Home</p></Link>
                <Link href="/rankings"><p className="nav">Rankings</p></Link>
            </div>
            <div className="text">
                    <p>The country that receives the most clicks each month will be honored with the prestigious crown as a reward for their outstanding performance.</p>
                    <p> | </p>
                    <p>A project created for fun and educational purposes.</p>
                    <p> | </p>
                    <p>The only data that TopCount stores is the country from each click.</p>
                    <p> | </p>
                    <p>Source code for the project can be found in the footer.</p>
                    <p> | </p>
                    <p>Contact: contact@topcount.app</p>
            </div>
        </>
    )
}