import CardShow from "../components/Card-show";
import "../CSS/Tips.css"
import {useEffect, useState} from 'react';
import axios from 'axios';

function Tips(){
    const [konten, setKonten] = useState([
        {
            judul: "",
            kategori: "",
            deskripsi: ""
        }
    ]);
    
    
    useEffect(() => {
        ambildata()
    }, [])
    
    function ambildata() { 
    axios
        .get(`${process.env.REACT_APP_API_URL}`)
        .then((res)=>{
            setKonten(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div className="Tips">
            <p className="big-tips">
                TIPS
            </p>
            <CardShow isikonten={konten}/>
        </div>        
    )
}

export default Tips;