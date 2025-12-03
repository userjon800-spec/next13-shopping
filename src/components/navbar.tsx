import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <div className="flex items-center justify-center w-fit h-[45px] relative ">
          <Image
            src={"/logos.png"}
            alt={"logo"}
            className="relavitve"
            width={50}
            height={40}
          />{" "}
          <span className="text-[25px]">AVOHIR</span>
        </div>
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home page
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900 ">
            All products
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900 ">
            Contacts
          </Link>
        </nav>
        <Link href={"/"}>
          <button className="button  text-black border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            My bag
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
