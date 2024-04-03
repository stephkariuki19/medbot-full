import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Homebody from "./(components)/Homebody";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homebody />
      <Footer/>
    </div>
  );
}
