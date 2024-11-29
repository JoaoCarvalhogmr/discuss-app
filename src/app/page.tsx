import * as actions from "@/actions"
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Profile from "@/components/Profile";


export default async function Home() {
  const session = await auth();


  return (
    <main>
      <form action={actions.signIn}>
        <Button type="submit" className="bg-blue-400">
          Sign In
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit" className="bg-blue-400">
          Sign Out
        </Button>
      </form>
      {session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>}
      <Profile />
    </main>
  );
}
