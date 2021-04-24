import React from 'react';

const Footer = (props) => {
    return (

        <footer>
         
         <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 well">
          <div class="col-md-12">
              
          <p class="text-success text-center">Presentado por Cristian Aragón - Todos los derechos reservados &copy; {props.fecha}</p>
          </div>
        </div>
      </div>
      </div>
      
      </footer>
       
    );
}

export default Footer;