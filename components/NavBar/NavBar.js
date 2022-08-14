import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import classes from "../../utils/classes";
import client from "../../utils/client";
import Image from "next/image";

export const NavBar = () => {
  return (

    <Toolbar >
      <NextLink href="/" passHref>
        <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image src="/logo.svg" alt="Logo" width={102} height={66} />
        </Link>
      </NextLink>
    </Toolbar>

  );
};

// passHref - need it because we use Link from material UI , but NextLink is from next.js -
//the way to use Link in material ui based project in next.js app
