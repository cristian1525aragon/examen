import {useState,Fragment} from 'react';

// Cristian Aragon

function Diapositivas({diapositivas}) {
    const [actual,setActual] = useState(0);
    return (
        <Fragment>
            <br></br>
            <br></br>
            <center>
        <div>
            {/* Boton resetear  */}
            <button class="btn btn-success"
            disabled={actual===0}
            onClick={() => ( setActual(0) )}
            >Restart</button>

            {/* boton anterior */}
            <button class="btn btn-success"
            disabled={actual===0}
            onClick={() => ( setActual(actual - 1))}
            >Prev</button>
             
             {/* boton siguiente */}
            <button class="btn btn-success"
            disabled={actual===diapositivas.length-1}
            onClick={() => ( setActual(actual + 1))}
            >Next</button>
<br></br>
<br></br>
<br></br>
        </div>
        {/* llamado del texto  */}
        <div className="diapositiva">
            
            <h1>{diapositivas[actual]['title']}</h1>
            <p>{diapositivas[actual]['text']}</p>
            

        </div>
        </center>
        </Fragment>
    )
}

export default Diapositivas;