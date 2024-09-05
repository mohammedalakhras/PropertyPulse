"use client";
import Link from "next/link";
import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";

const HomePage = () => {
  const router=useRouter();

  console.log("hello");

  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Go To Propperties</Link>
      <br />
      <button onClick={() => router.push("/properties")}> Go Properties</button>
      <h1>{usePathname()}</h1>
      <h1>{useSearchParams() } : {useSearchParams().get('name')}</h1>
      
    
    </div>
  );
};

export default HomePage;
