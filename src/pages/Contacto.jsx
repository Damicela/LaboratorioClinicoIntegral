import { useState } from "react";
// import { Switch } from "@headlessui/react";
import { redirect, Form, useActionData } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
// import SendMessage from "../components/SendMessage";
import Error from "../components/Error";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const SendMessage = async (data) => {

  {
      try {
          const respuesta = await fetch(
            "https://storelab.laboratorioclinicointegral.com/api/send-mail",
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        console.log(respuesta)
          await respuesta.json();
          alert('Mensaje enviado')
    
        } catch (error) {
         
          return redirect('/')
        }
  }
 
  
}

export const action = async ({request}) => {
 
  const formData = await request.formData()
 
  const data = Object.fromEntries(formData)
  
  const email = formData.get('email')

  let errores = []

  if(Object.values(data).includes('')){
    errores.push('Todos los campos son obligatorios')
}

// Expresion regular para verificar el formato de email
let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

if(!regex.test(email)){
    errores.push('El email no es valido')
}


// Retornar datos si  hay errores
if(Object.keys(errores).length){
    return errores
}{
console.log(data)
 await SendMessage(data)

 return redirect('/')
}


}

export default function Contacto() {
  // const [agreed, setAgreed] = useState(false)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  
  const errores = useActionData()
 
  return (
    <div className="flex flex-col px-0 py-6 md:flex-row md:py-10 md:gap-16">
      <div className=" bg-white px-0 md:px-6 py-10 sm:py-10 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Información
        </h2>
        <div className="flex items-center px-6 py-6 max-w-xl mt-20 mb-5 text-left border-b-[2px]">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <div className="bg-blue-800 w-12 h-12 rounded-md mr-5 py-2 px-2">
              <BsTelephone />
            </div>
          </IconContext.Provider>
          <div>
            <h2 className="text-2xl font-medium text-gray-900">Contacto</h2>
            <h3 className="text-lg text-gray-500">755-554-0143</h3>
          </div>
        </div>

        <div className="flex items-center px-6 md:mt-20 py-10 max-w-xl sm:mt-20 mb-5 text-left border-b-[2px]">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <div className="bg-blue-800 w-12 h-12 rounded-md mr-5 py-2 px-2">
              <AiOutlineMail />
            </div>
          </IconContext.Provider>
          <div className="">
            <h2 className="text-2xl font-medium text-gray-900">Email</h2>
            <h3 className="text-lg text-gray-500">
              laboratoriointegral@live.com.mx
            </h3>
          </div>
        </div>

        <div className="flex items-center px-6 py-10 mx-auto md:mt-20 max-w-xl sm:mt-20 mb-5 text-left border-b-[2px]">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <div className="bg-blue-800 w-12 h-12 rounded-md mr-5 py-2 px-2">
              <MdOutlinePlace />
            </div>
          </IconContext.Provider>
          <div className="">
            <h2 className="text-2xl font-medium text-gray-900">Dirección</h2>
            <h3 className="text-lg text-gray-500 text-left">
              Calle Saturno, Esq. Paseo <br /> de la Boquita Col. Industrial{" "}
              <br />
              Zihutanejo, Gro. CP.40880
            </h3>
          </div>
        </div>
      </div>
      <Form
      method="post"
      noValidate>
      <div className=" bg-white px-6 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight py-10 text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
        </div>
       

        <div className='transition-opacity ease-in duration-7000'>
          {errores?.length && errores.map( (error, i) => <Error key={i} error={error}/> ) }
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-12 sm:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="text-lg text-gray-500">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstname"
                id="first-name"
                autoComplete="given-name"
                defaultValue={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="text-lg text-gray-500">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastname"
                id="last-name"
                autoComplete="family-name"
                defaultValue={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="text-lg text-gray-500">
              Correo
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="text-lg text-gray-500">
              Teléfono
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone-number"
                autoComplete="tel"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-lg text-gray-500">
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                defaultValue={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Aceptar{" "}
              <Link
                to={"/privacy-policy"}
                className="font-semibold text-indigo-600"
              >
                política de privacidad
              </Link>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">

          <input
          type='submit'
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          value="Enviar"
          />
         
        </div>
      </div>

      </Form>
     
    </div>
  );
}
