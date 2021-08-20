import '../App.css';
import React from 'react';
import CardNew from './Card-new';
import CardThree from './Card-three';

function Konten({headerkonten}){
    let indexNew = headerkonten.length - 1

    return(
        <div className="Konten">
            <CardNew New={headerkonten[indexNew]}/>
            
            <CardThree konten={headerkonten}/>
            
        </div>
    );
}

export default Konten;