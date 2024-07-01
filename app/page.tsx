import Header from "@/components/header";
import Button from "@/components/button";
import RealtimeData from "@/components/realtimeCount";

// Palette: https://coolors.co/palette/f4f1de-e07a5f-3d405b-81b29a-f2cc8f

export default function Home() {
  return (
    <main>
      <section className="header">
        <Header />
      </section>
      <section>
        <RealtimeData />
        <Button />
      </section>
    </main>
  );
}
