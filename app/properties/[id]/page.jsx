'use client';
import { useParams } from "next/navigation";

const PropertyPage = () => {

  const param=useParams();
  return (
    <div>PropertyPage

<h1>{param.id }</h1>
    </div>
    
  )
}

export default PropertyPage