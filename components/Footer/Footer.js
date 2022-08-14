import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ display: "flex", justifyContent: "center" }}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </Box>
  );
};
