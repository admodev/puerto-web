// Components
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-evenly bg-slate-100 h-24 w-100">
      <div className="float-left my-auto">
        <Image src={'/static/puerto_logo_two.svg'} alt='puerto logo' width='100' height='24' />
      </div>
      <div className="flex flex-row items-center justify-between w-80">
        <h2 className="capitalize">Nosotros</h2>
        <h2 className="capitalize">Portfolio</h2>
        <h2 className="capitalize">Tecnologias</h2>
      </div>
      <div className="float-right my-auto">
        <a className="bg-green-600 py-4 px-10 rounded-lg text-center cursor-pointer text-white border-2 border-black">Contactar</a>
      </div>
    </div>
  );
};

export default Navbar;
