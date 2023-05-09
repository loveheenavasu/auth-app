import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import withAuth from "@/utils/Authentication";
import { Typography } from "@mui/material";

function Dashboard() {
  const { data: session } = useSession();
  console.log(session, "session");
  const router = useRouter();
  //   if (session) {
  return (
    <div>
      <h1 className="title">Create Next App</h1>

      <div>
        <h2> {/* Signed in as {session.user.email} <br /> */}</h2>
        <Typography>email : {session?.user?.email}</Typography>
        <Typography>name:{session?.user?.name}</Typography>
        <div>
          <button
            onClick={() => {
              signOut();
              localStorage.removeItem("userData");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
