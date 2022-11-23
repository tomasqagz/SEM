import React from 'react'
import './css/Sidebar.css'
import {NavLink} from 'react-router-dom'



export const Sidebar = () => {
  return (


    <div>
        <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="/Inicio">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Inicio
                        </span>
                    </a>
                </li>

                <li>
                    <a href="/Editor">
                       <i class="fa fa-pencil-square-o fa-2x"></i>
                        <span class="nav-text">
                            Editor
                        </span>
                    </a>
                </li>
            
                <li class="has-subnav">
                    <a href="/Contactos">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Contactos
                        </span>
                    </a>
                   
                </li>
                
                <li>
                   <a href="/Enviar">
                        <i class="fa fa-envelope-o fa-2x"></i>
                        <span class="nav-text">
                            Enviar
                        </span>
                    </a>
                </li>
                
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>

    

   
    
   
  )
}
