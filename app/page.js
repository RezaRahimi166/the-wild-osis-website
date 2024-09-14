import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <>
      <div>
        <Navigation />

        <h1 className="flex items-center justify-center">
          The wild osis welcome to the Paradise!
        </h1>
        <Link href="/cabins">Explore luxury cabins</Link>
      </div>
    </>
  );
}
