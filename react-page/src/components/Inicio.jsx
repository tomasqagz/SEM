import React from 'react'
import './css/Inicio.css'

export const Inicio = () => {
  return (
    <div>
     <div class="parent1">
<div class="div11"> <h1> ACERCA DEL PROYECTO </h1> 
Proyecto realizado por Tomas Quiroga Gomez, Diego Ezequiel Benitez en la parte de desarrollo y Yamila Soledad Santarossa como tutora, 
es un sistema de envios de mails realizado en React, que cuenta con edicion de mails, seleccion de contactos y envio final.
Cabe aclarar que el proyecto esta hecho desde 0, y tambien abarca todo el aprendizaje que se realizo para poder crearlo. 
<b>( HTML, CSS, JavaScript, React, Python, Librerias, Github, etc )</b>, si bien estamos en la primera etapa, la idea es que 
sea un proyecto totalmente funcional y escalable para poder continuarlo en los siguientes años por futuros integrantes.
</div>
<div class="div21"> <i class="fa fa-home fa-2x"></i> <h1> INICIO </h1> En esta seccion se vera mas que nada una introduccion al proyecto y las explicaciones de sus
 diferentes funcionalidades, Editor, Contactos y Envio.</div>
<div class="div31"> <i class="fa fa-pencil-square-o fa-2x"></i> <h1> EDITOR</h1> Aca se encuentra el armado y la edicion del mail, si bien al principio va a ser un poco simple la idea a futuro 
es poder realizar un sistema de Drag&Drop donde se puedan arrastrar imagenes, secciones, hipervinculos, titulos, etc. </div>
<div class="div41"> <i class="fa fa-folder-open fa-2x"></i> <h1> CONTACTOS</h1>En esta parte se encuentran los contactos, al prinicipio tambien sera simple, se subira un excel, ahi mismo el programa obtendra
los datos y los mostrara por pantalla, al mismo tiempo que por detras solo se agarraran los mails y se los enviara a la parte final del Envio. </div>
<div class="div51"> <i class="fa fa-envelope-o fa-2x"></i> <h1> ENVIO</h1> La parte final.. aqui se confeccionara el mail completo remitente, destinatarios, asunto y finalmente el mensaje, algunos 
de estos topics se haran automaticamente como puede ser los destinarios y el mensaje y otros se tendran que escribir manualmente como el titulo.  </div>
</div>




    </div>
  )
}
