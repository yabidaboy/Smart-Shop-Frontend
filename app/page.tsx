import Image from "next/image";
import { Banner } from "./_components/Banner";
import NewProds from "./_components/NewProds";
import Categories from "./_components/Categories";

export default function Home() {
  return (
    <div>
      <Banner/>
      <NewProds/>
      <Categories/>
    </div>
  );
}
