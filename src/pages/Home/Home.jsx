import React from "react";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { HomeContent } from "./HomeContent/HomeContent";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
