
import servicios from "../data/services";

// eslint-disable-next-line react/prop-types
const Servicios = ({ servicios }) => {
  // eslint-disable-next-line react/prop-types
  const { nombre, descripcion, indicaciones, imagen, costo } = servicios;

  return (
    <div className="md:grid md:grid-cols-3  bg-white gap-6  my-10 shadow-lg rounded-lg ">

      <div className="px-2 py-2">
        <img src={imagen} alt="lab5.jpeg" className="rounded-lg  object-cover" />
      </div>
      <div className="col-span-2 py-5 px-5">
        <h2 className="uppercase text-2xl font-medium mb-2">{nombre}</h2>
        <p className="text-2xl font-medium mb-4 text-blue-800">$ {costo}</p>
        <div className="w-40 pl-2">
          <h1 className="text-2xl font-medium cursor-pointer border-b border-blue-800">Descripción</h1>
        </div>
        <p className="py-5 text-lg">{descripcion}</p>
        <div className="w-40 pl-2">
          <h1 className="text-2xl font-medium cursor-pointer border-b border-blue-800">Indicaciones</h1>
        </div>
        <p className="py-5 text-lg">{indicaciones}</p>
      </div>
    </div>
  );
};

const ServiceRender = () => {
  return (
    <div className=" bg-gray-100 px-2 md:w-2/3 ">
      {servicios.map((servicio, key) => (
        <Servicios key={key} servicios={servicio} />
      ))}
    </div>
  );
};

export default ServiceRender;
