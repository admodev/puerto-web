// Components
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    alert('Esta pagina web esta bajo desarrollo, por favor, proceda comprendiendo que algunas cosas aun no estaran completas. Muchas gracias.');
  }, []);

  return (
    <div>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Asd</h1>
        </div>
      </main>
    </div>
  );
}
