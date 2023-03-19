import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function Page() {
  await sleep(3000);

  const newCookies = cookies();
  console.log(newCookies.get("access_token"));

  return (
    <React.Fragment>
      <div>Home page</div>
      <Link className={roboto.className} href="/shop">
        Shopa kec
      </Link>
      <Link href="/shop?name=siruz">Shopa kec 2</Link>
      <Link
        href={{
          pathname: "/shop",
          query: {
            name: "siruz",
            surname: "mammadli",
          },
        }}
      >
        Shopa kec 3
      </Link>

      <Image
        src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={500}
        height={500}
        alt={"product"}
      />
    </React.Fragment>
  );
}
