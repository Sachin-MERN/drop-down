import Image from "next/image";
import DropDown from "./dropdown/page";

export default function Home() {
  return (
    <> 
      <div className="text-center mt-8 font-bold text-3xl"> 
        <h4>Home Page</h4>

        <DropDown />
      </div>
    </>
  );
}
