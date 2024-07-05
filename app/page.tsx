import Header from "@/components/header";
import Button from "@/components/button";
import RealtimeData from "@/components/realtimeCount";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="header">
          <Header />
          <Link href="/rankings"><p className="nav">Rankings</p></Link>
          <Link href="/about"><p className="nav">About</p></Link>
        </div>
        <RealtimeData />
        <Button />
      </section>
    </main>
  );
}
