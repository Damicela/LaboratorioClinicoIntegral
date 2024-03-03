import { useState } from "react";
import PdfRender from "./PdfRender";


const FetchService = () => {
  const [servicio, setServicio] = useState("");
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState("");
  const [pdf, setPdf] = useState(null);
  const [name, setName] = useState('')
  const [fecha, setFecha] = useState('')

  const getService = async () => {
    const response = await fetch(
      `https://storelab.laboratorioclinicointegral.com/api/get-service-by-www/${servicio}`
    );

    if (!response.ok) {
      setMessage(`A ocurrido un error: ${response.status}`);
      setCode("error_red");
      return;
    }
    {
      const result = await response.json();
      setMessage(result.message);
      setCode(result.code);
      result.service ? setPdf(result.service.urls) : "";
      setName(result.service ? result.service.name: '')
      setFecha(result.service ? new Date(result.service.created_at).toLocaleDateString(): '')
    }
  };

  return (
    <div className="flex flex-col w-full items-center mb-40">
      <div className="w-full ">
        <img src="./assets/studies.png" alt="baner1" className="w-full" />
      </div>
      <div className="mt-48 mb-10">
        <h2 className="text-2xl">Número de Servicio</h2>
      </div>
      <div className="flex">
        <form
          action=""
          method="get"
          className="flex text-center items-center w-60 "
        >
          <input
            type="search"
            placeholder="Ej. ADG523MLNH"
            className="border-2 border-gray-400 mb-10 text-md h-10 px-2  mr-2 rounded-md"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          />
        </form>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 h-10 text-center text-lg 
          font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={getService}
        >
          Buscar
        </button>
      </div>

      {code == "not_pay" && (
        <div>
          <p className="text-red-600 text-xl flex px-5 ">
            {message}
          </p>
        </div>
      )}
      {code == "found" && (
        <div className="flex-col px-5 w-96 md:w-auto overflow-clip">
          <p className="text-green-800 text-xl flex py-2 justify-center">
            {message}
          </p> 
          <div className="flex items-center justify-center gap-6">
            <h2 className="py-2 text-lg">{name}</h2>
          <p>{fecha}</p>
          </div>
          
          <div className="flex flex-col cursor-pointer">
            {pdf.map((e, i) => (
                
                 <PdfRender 
                 test={!e["name" + i] ? e["path" + i] : e["name" + i]} 
                 path={e["path" + i]} 
                 key={i}
                 />
            ))}
          </div>
        </div>
      )}
      {code == "not_found" && (
        <div>
          <p className="text-orange-500 text-xl flex px-5">
            
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

// AAG315KPD no pago
// AAG522MLNH disponible
// AF466JPA varios servicios
// AD50KPD varios servicios viejo
export default FetchService;
