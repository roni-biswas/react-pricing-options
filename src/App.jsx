import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header className="bg-amber-400">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto pt-6 mb-6">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
