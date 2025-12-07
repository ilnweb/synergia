"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Slaze - Solar & Renewable Energy Next js Template";
  }, []);
};

export default SEO;