import React from 'react';
import './css/Contactos.css';
import ExcelJS from 'exceljs';


export const Contactos = () => {

  function genera_tabla(c, r) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("section")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < r; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < c; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
  
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.load(data).then(() => {
          // aquí puedes procesar los datos del libro de trabajo
          genera_tabla(workbook.worksheets[0].columnCount,workbook.worksheets[0].rowCount)
  
        });
      };
      
      reader.readAsArrayBuffer(file);
    };

  return (

    <div>
      <input type="file" id="contactosdiv" onChange={handleFileChange} />
      <section> </section>
    </div>

    

  );

}