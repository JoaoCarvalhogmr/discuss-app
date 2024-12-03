'use client'

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import * as actions from "../actions"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

const HeaderAuth = () => {
    const session = useSession();

    let authContent: React.ReactNode;

    if(session.status === "loading" ) {
        authContent = null;
    }
    else if(session.data?.user) {
      authContent = (
        <Popover  >
          <PopoverTrigger>
            <Avatar>
                <AvatarImage src={session.data?.user.image || ''} />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="center" >
              <form action={actions.signOut} >
                <Button type="submit"  variant={"ghost"}>Sign Out</Button>
              </form>
          </PopoverContent>
        </Popover>
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
    return authContent
}

export default HeaderAuth