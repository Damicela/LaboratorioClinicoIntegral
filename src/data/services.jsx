const servicios = [
    {
      nombre: "ácido úrico",
      descripcion:
        "Se usa para diagnosticar, evaluar y controlar enfermedades como la gota y enfermedad renal crónica, así como para evaluar la función renal entreotras enfermedades",
      indicaciones:
        "Se requiere ayuno de 8 hrs, los resultados para muestras tomadas antes de las 10:00 am estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/acido-urico.jpg",
        costo: 200
    },
    {
      nombre: "BIOMETRIA HEMATICA",
      descripcion:
        "Es útil en muchos escenarios clínicos, detección temprana de problemas de salud como la anemia, monitoreo y seguimiento de enfermedades existentes. La indicación específica depende del caso y los síntomas presentados por el paciente",
      indicaciones:
        "Ayuno de 4 horas, resultados para muestras tomadas antes de las 10:00 am estarán listos a las 02:00 pm del mismo día.",
      imagen: "./public/assets/lab5.jpeg",
      costo: 200
      },
    {
      nombre: "COLESTEROL TOTAL",
      descripcion:
        "Nos ayuda en la evolución cardiovascular, orientar el tratamiento y realizar seguimiento, pero debe complementarse con otras pruebas y factores de riesgo para obtener una evaluación integral.",
      indicaciones:
        "Ayuno de 8 horas, resultados para muestras tomadas antes de las 10:00 am estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/colesterol-analisis.jpg",
        costo: 200
    },
    {
      nombre: "CREATININA",
      descripcion:
        "Es importante para la evaluación de la función renal y detectar enfermedades del riñón así como el control de estas, también para ajustar dosis de medicamentos y la evaluación.",
      indicaciones:
        "Ayuno de 8 horas, los  resultados para muestras tomadas antes de las 10:00 am estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/1-Examen-de-creatinina.jpg",
        costo: 200
    },
    {
      nombre: "CULTIVO DE EXUDADO FARINGEO",
      descripcion:
        "Es importante en el diagnóstico y manejo de diferentes  enfermedades e infecciones respiratorias superiores, además de contribuir a la prevención.",
      indicaciones:
        "Ayuno de 8 horas, No estar bajo tratamiento con antibióticos o tener más de 24 horas de haber tomado la última dosis, No utilizar ningún antiséptico bucal, 8 horas antes de la toma de la muestra y No consumir alimentos una hora antes de la toma de muestra. El tiempo de entrega de este estudio es de 3 a 5 días.",
        imagen: "./public/assets/exudado-faringeo.jpg",
        costo: 200
    },
    {
      nombre: "ESTUDIO REACCIONES FEBRILES",
      descripcion:
        "Es importante en el diagnóstico y manejo de diferentes  enfermedades infecciones tales como la fiebre tifoidea, brucelosis, salmonelosis entre otras.",
      indicaciones:
        "Ayuno de 4 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/reacciones-febriles.jpg",
        costo: 200
    },
    {
      nombre: "EXAMEN GENERAL DE ORINA",
      descripcion:
        "Es importante en detección de infecciones del tracto urinario, diagnóstico de enfermedades del riñón, valoración de la función renal, control de enfermedades crónicas, evaluación del estado de hidratación y detección de algunos trastornos metabólicos.",
      indicaciones:
        "Se prefiere pero no es indispensable la primera orina de la mañana. Para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/analisis-de-orina.png",
        costo: 200
    },
    {
      nombre: "FACTOR REUMATOIDE",
      descripcion:
        "Ayuda en el diagnóstico de enfermedades autoinmunes como la artritis reumatoide, es importante tener en cuenta que su presencia no es exclusiva de la artritis reumatoide y que su resultado positivo debe ser interpretado junto con los síntomas y otras pruebas clínicas.",
      indicaciones:
        "Ayuno de 8 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/factor-reumatoide.jpg",
        costo: 200
    },
    {
      nombre: "GLUCOSA",
      descripcion:
        "Es una medida para evaluar el nivel de azúcar en la sangre y controlar el metabolismo de esta en el cuerpo, es especialmente útil para las persona con diabetes, ya que les ayuda a monitorear su nivel en sangre y tomar las medidas necesarias para mantenerlo en un rango saludable.",
      indicaciones:
        "Ayuno de 8 a 12 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/Examen-de-Glucosa-en-sangre.jpg",
        costo: 200
    },
    {
      nombre: "PERFIL DE LIPIDOS",
      descripcion:
        "Es fundamental para evaluar el estado de salud cardiovascular de una persona, incluye los niveles de colesterol total, colesterol HDL (colesterol bueno), colesterol LDL (colesterol malo) y los niveles de triglicéridos.",
      indicaciones:
        "Ayuno de 8 a 12 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/perfil-lipidos.jpg",
        costo: 200
    },
    {
      nombre: "    PERFIL FUNCION HEPATICA",
      descripcion:
        "Se realiza para evaluar la función del hígado y detectar posibles enfermedades o trastornos del hígado, algunas de ellos que se pueden detectar o evaluar son: Hepatitis, Cirrosis hepática, Hígado Graso no alcohólico, cálculos biliares entre otros.",
      indicaciones:
        "Ayuno de 8 a 12 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/perfil-hepatico.jpg",
        costo: 200
    },
    {
      nombre: "PROTEINA C REACTIVA",
      descripcion:
        "La proteína c reactiva nos ayuda en diagnóstico de infecciones, evaluación de enfermedades inflamatorias, riego cardiovascular y ayuda  a guiar el tratamiento y la prevención de diversas  enfermedades.",
      indicaciones:
        "Ayuno de 4 a 8 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/pcr.jpeg",
        costo: 200
    },
    {
      nombre: "TRIGLICERIDOS",
      descripcion:
        "Se utiliza para el diagnóstico de enfermedades como la hipertriglicedemia o dislipidemia, que aumenta el riesgo de enfermedades cardiovasculares, como la enfermedad coronaria o el infarto al miocardio.",
      indicaciones:
        "Ayuno de 8 a 12 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/trigliceridos.jpg",
        costo: 200
    },
    {
      nombre: "UREA",
      descripcion:
        "Es importante para evaluar la función renal, diagnosticar y monitorear enfermedades renales, evaluar el balance de nitrógeno y determinar el estado de hidratación.",
      indicaciones:
        "Ayuno de 8 a 12 horas, para muestras tomadas antes de las 10:00 resultados  estarán listos a las 02:00 pm del mismo día",
        imagen: "./public/assets/urea.jpg",
        costo: 200
    },
  ]

  export default servicios