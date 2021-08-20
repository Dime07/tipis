import "../CSS/CardShow.css"

function CardThree({konten}){
    return(
        <div className="CardThree">

            {konten.slice(konten.length-4,konten.length-1).map((isi)=>(
                <div className="card">
                    <img src={isi.link} alt="" />
                    <div className="text">
                        <p className="title-tips-show">
                            {isi.judul}
                        </p>
                        <p className="kategori-tips-show">
                            {isi.kategori}
                        </p>
                        <p className="desc-tips-show">
                            {isi.deskripsi}
                        </p>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn-look">
                            Look
                        </button> 
                    </div>
                </div>
            ))}
            

        </div>
    )
}

export default CardThree;