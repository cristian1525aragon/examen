import {useState,Fragment} from 'react';



function Diapositivas({diapositivas}) {
    const [actual,setActual] = useState(0);
    return (
        <Fragment>
        <div>
            <button class="btn btn-success"
            className="restart btn"
            disabled={actual===0}
            onClick={() => ( setActual(0) )}
            >Restart</button>
            <button class="btn btn-success"
            className="btn"
            disabled={actual===0}
            onClick={() => ( setActual(actual - 1))}
            >Prev</button>
            <button class="btn btn-success"
            className="btn"
            disabled={actual===diapositivas.length-1}
            onClick={() => ( setActual(actual + 1))}
            >Next</button>
        </div>
        
        <div className="diapositiva">
            <h2>{diapositivas[actual]['title']}</h2>
            <p>{diapositivas[actual]['text']}</p>
        </div>
        </Fragment>
    )
}

export default Diapositivas;