export default function ModalComponent(){
    return(
        <div id="modal">
            <div className="container">
                <div className="gap">
                    <div className="title"></div>
                    <div className="content">
                        <a href="!#" className="modal-img-btn"><img className="modal-image" src="./img/wedding-img08.jpg" alt=""/></a>
                    </div>
                </div>

                <a href="!#" className="modal-close-btn">×</a>
                <a href="!#" className="modal-prev-btn">◁</a>
                <a href="!#" className="modal-next-btn">▷</a>

            </div>
        </div>
    )
}