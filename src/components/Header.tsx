import Link from "next/link"
import { Input } from "./ui/input";
import HeaderAuth from "./HeaderAuth";


const Header = async() => {

  return (
    <header className="shadow mb-6 w-full py-3">
      <nav className="flex w-full justify-around items-center">
        <div>
          <Link href={"/"} className="font-bold">
            Discuss
          </Link> 
        </div>
        <div > 
          <Input />
        </div>
        <div >
          <HeaderAuth />
        </div>
      </nav>
    </header>
  )
}

export default Header