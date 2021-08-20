import "../CSS/CardNew.css"

function CardNew({New}){
    return(
        <div className="CardNew">
            <img className="img-thumb-new" src={New.link}  alt="" />
            <div className="info-tips">
                <p className="new-release">
                    New Release
                </p>
                <div className="text">
                    <p className="title-tips-new">
                        {New.judul}
                    </p>
                    <p className="kategori-tips-new">
                        {New.kategori}
                    </p>
                    <p className="desc-tips-new">
                        {New.deskripsi}
                    </p>
                </div>
                <button className="btn-look">
                    Look
                </button>
            </div>
        </div>
    )
}

export default CardNew;