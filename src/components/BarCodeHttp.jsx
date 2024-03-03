import { useLoaderData } from "react-router-dom";
import PdfRender from "./PdfRender";

// eslint-disable-next-line react-refresh/only-export-components
async function getService(barcode) {
  const response = await fetch(
    `https://storelab.laboratorioclinicointegral.com/api/get-service-by-www/${barcode}`
  );
  const resultado = await response.json();

  console.log("resultado", resultado);
  return resultado;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const code = await getService(params.barcode);
  return code;
}

const RenderCode = () => {
  const service = useLoaderData();
  console.log("aqui es el render", service);
  return (
    <div>
      {service.code == "not_pay" && (
        <div>
          <p className="text-red-600 text-xl flex px-5 ">{service.message}</p>
        </div>
      )}
      {service.code == "found" && (
        <div className="flex-col px-5 w-96 md:w-auto overflow-clip">
          <p className="text-green-800 text-xl flex py-2 justify-center">
            {service.message}
          </p>
          <div className="flex items-center justify-center gap-6">
            <h2 className="py-2 text-lg">{service.service.name}</h2>
            <p>{service.service.updated_at}</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            {service.service.urls.map((e, i) => (
              <PdfRender
                test={!e["name" + i] ? e["path" + i] : e["name" + i]}
                path={e["path" + i]}
                key={i}
              />
            ))}
          </div>
        </div>
      )}
      {service.code == "not_found" && (
        <div>
          <p className="text-orange-500 text-xl flex px-5">{service.message}</p>
        </div>
      )}
    </div>
  );
};

// const BarCodeHttp = () => {

//     const getService = async() => {

//         const response = await fetch(
//             `https://storelab.laboratorioclinicointegral.com/api/get-service-by-www/${servicio}`
//           )

//     }
//     return (

//         <h1>AF466JPA-BH1709145975.pdf</h1>
//     )
// }

export default RenderCode;
