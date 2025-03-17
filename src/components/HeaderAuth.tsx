'use client'

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import * as actions from "../actions"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { LogOut, User } from "lucide-react";

const HeaderAuth = () => {
    const session = useSession();

    let authContent: React.ReactNode;

    if(session.status === "loading" ) {
        authContent = null;
    }
    else if(session.data?.user) {
      authContent = (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session.data?.user.image || ''} alt={session.data?.user.name || ''} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-48">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm">
                <User className="h-4 w-4" />
                <span className="font-medium">{session.data?.user.name}</span>
              </div>
              <form action={actions.signOut}>
                <Button type="submit" variant="ghost" className="w-full justify-start gap-2 text-sm">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      )
    }
    else {
      authContent = (
        <div className="flex items-center gap-2">
          <form action={actions.signIn}>
            <Button type="submit" variant="ghost">Sign In</Button>
          </form>
          <form action={actions.signIn}>
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      )
    }
    return authContent
}

export default HeaderAuth