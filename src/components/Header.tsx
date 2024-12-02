import { auth } from "@/auth"
import Link from "next/link"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarImage } from "./ui/avatar";
import * as actions from "../actions"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";


const Header = async() => {
    const session = await auth();
    
    let authContent: React.ReactNode;

    if(session?.user) {
      authContent = (
        <Menubar asChild>
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar>
              <AvatarImage src={session.user.image || ''} />
            </Avatar>
          </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
            <Button onClick={actions.signOut} type="submit"  variant={"ghost"}>Sign Out</Button>
      </MenubarItem>
    </MenubarContent>
    </MenubarMenu>
  </Menubar>


      )
    }
    else {
      authContent = (
        <section className="flex gap-2">
          <form action={actions.signIn}>
            <Button type="submit" className="text-purple-900 border border-purple-900"  variant={"outline"}>Sign In</Button>
          </form>
          <form action={actions.signIn}>
            <Button type="submit" className="bg-blue-100 text-blue-800"  variant={"secondary"}>Sign Up</Button>
          </form>
        </section>
      )
    }



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
          {authContent}
        </div>
      </nav>
    </header>
  )
}

export default Header