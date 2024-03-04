import Link from "next/link";
import React from "react";

const Auth = () => {
  const auth = "success";

  if (auth === "success") {
    return (
      <div className=" space-x-3">
        <Link href={"/write"}>Write</Link>
        <Link href={"/write"}>Logout</Link>
      </div>
    );
  }
  return (
    <div className=" space-x-3">
      <Link href={"/write"}>Write</Link>
      <Link href={"/write"}>Login</Link>
    </div>
  );
};

export default Auth;
