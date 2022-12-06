import React from 'react';
import './css/Contactos.css';


var XLSX = require("xlsx");




export const Contactos = () => {

  function handleFile(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
      var workbook = XLSX.read(e.target.result);
  
      /* DO SOMETHING WITH workbook HERE */
      console.log(workbook.Sheets)
    };
    reader.readAsArrayBuffer(file);
  }
  

  return (

    <div id="contactosdiv">
      <input type="file" id="input_dom_element" onChange={handleFile}></input>
    </div>

  )

  
  
    
  

}
