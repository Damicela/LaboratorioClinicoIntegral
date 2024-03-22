/* eslint-disable react/prop-types */
import PdfRender from "./PdfRender"


// eslint-disable-next-line react/prop-types
const RequestedRendering = ({code, message, fecha, pdf, name }) => {
    return (
        <div>
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
    )
}

export default RequestedRendering