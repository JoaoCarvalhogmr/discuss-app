import Link from "next/link"
import SearchInput from "./SearchInput";
import HeaderAuth from "./HeaderAuth";
import { Suspense } from "react";


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
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
        <div >
          <HeaderAuth />
        </div>
      </nav>
    </header>
  )
}

export default Header