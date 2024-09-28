
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";



const inter = Inter({ subsets: ["latin"] });



function Land() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: inter.style.fontFamily,
      }}
    >
   
      <NavBar />

    </main>
  );
}

export default Land;
