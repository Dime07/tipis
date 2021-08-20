import "../CSS/CardShow.css"
function CardShow({isikonten}){

    return(
        <div className="CardShow">
            {isikonten.map((konten,index) => (
                <div className="card" key={index}>
                    <img src={konten.link} alt="" />
                    <div className="text">
                        <p className="title-tips-show">
                            {konten.judul}
                        </p>
                        <p className="kategori-tips-show">
                            {konten.kategori}
                        </p>
                        <p className="desc-tips-show">
                            {konten.deskripsi}
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

export default CardShow;