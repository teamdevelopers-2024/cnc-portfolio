import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. Copyrighted to Kode
          & Klick LLP.
        </p>
        <p className="caption text-n-4 lg:block">
          Developed by{" "}
          <a
            href="https://www.zeecodesolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Zeecode Solutions
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Footer;
