import React from 'react'
import './css/Sidebar.css'



export const Sidebar = () => {
  return (


    <div>
        <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a href="/Inicio">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Inicio
                        </span>
                    </a>
                </li>

                <li>
                    <a href="/Editor">
                       <i className="fa fa-pencil-square-o fa-2x"></i>
                        <span className="nav-text">
                            Editor
                        </span>
                    </a>
                </li>
            
                <li className="has-subnav">
                    <a href="/Contactos">
                       <i className="fa fa-folder-open fa-2x"></i>
                        <span className="nav-text">
                            Contactos
                        </span>
                    </a>
                   
                </li>
                
                <li>
                   <a href="/Enviar">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <span className="nav-text">
                            Enviar
                        </span>
                    </a>
                </li>
                
            </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>

    

   
    
   
  )
}
