import { useState } from "react";
import "../css/App.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import ProfileCard from "../components/ProfileCard";
import Cards from "./Cards";

export default function App() {
  return (
    <div className="md:flex mt-[50px]">
      <ProfileCard />
      <Cards />
    </div>
  );
}
