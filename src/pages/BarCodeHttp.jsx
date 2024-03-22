import { useLoaderData } from "react-router-dom"
import RequestedRendering from "../components/RequestedRendering";

// eslint-disable-next-line react-refresh/only-export-components
async function getService(barcode) {
   
  const response = await fetch(
    `https://storelab.laboratorioclinicointegral.com/api/get-service-by-www/${barcode}`
  );
  const resultado = await response.json();
  
  return resultado;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const code = await getService(params.barcode);
  return code;
}

const RenderCode = () => {
  const result = useLoaderData();
  
  return (
    <div className="flex flex-col w-full items-center mb-40">
      <div className="w-full mb-40">
        <img src="../public/assets/studies.png" alt="baner1" className="w-full" />
      </div>
    <RequestedRendering
    code={result.code}
    pdf={result.service ? result.service.urls : ""}
    name={result.service ? result.service.name: ''}
    fecha={result.service ? new Date(result.service.created_at).toLocaleDateString(): ''}
    message={result.message}/>

    </div>
  )
}


export default RenderCode;
