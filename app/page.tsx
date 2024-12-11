
import Hero from "./components/hero";
import Card from "./components/card";
import Running from "./components/running";
import Gear from "./components/gear";
import Essentials from "./components/essentials";
import Stan from "./components/stan";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <Running/>
      <Gear/>
      <Stan/>
      <Essentials/>
    </main>
  );
}
