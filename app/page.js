import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div>Home page</div>
      <Link href="/shop">Shopa kec</Link>
      <Link href="/shop?name=siruz">Shopa kec 2</Link>
      <Link
        href={{
          pathname: "/shop",
          query: {
            name: "siruz",
          },
        }}
      >
        Shopa kec 3
      </Link>
    </React.Fragment>
  );
}
