import Image from "next/image";
import { Inter } from "next/font/google";
import Room1 from "./Room1.jsx"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Room1 />
  );
}
