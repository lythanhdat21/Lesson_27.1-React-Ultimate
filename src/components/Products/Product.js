import "./Product.scss"
import snicker1 from "../../assets/images/snicker1.jpg"
import snicker2 from "../../assets/images/snicker2.jpg"
import snicker3 from "../../assets/images/snicker3.jpg"
import snicker4 from "../../assets/images/snicker4.jpg"
import { useState } from "react"
import Lightbox from 'react-image-lightbox'

const images = [
    snicker1,
    snicker2,
    snicker3,
    snicker4
];

const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(snicker1)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [soluong, setSoluong] = useState(1)

    const handleClickPreviewImg = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index)
        setIsOpen(true)
    }

    return (
        <div>
            <div className="product-container">
                <div className="content-left">

                    <div className="img-up">
                        <img className="snicker1" src={currentUpImg} onClick={() => handleClickPreviewImg()} />
                    </div>

                    <div className="img-down">
                        <div className="img-small">
                            <img className={currentUpImg === snicker1 ? "active" : ""} src={snicker1} onClick={() => setCurrentUpImg(snicker1)} />
                        </div>
                        <div className="img-small">
                            <img className={currentUpImg === snicker2 ? "active" : ""} src={snicker2} onClick={() => setCurrentUpImg(snicker2)} />
                        </div>
                        <div className="img-small">
                            <img className={currentUpImg === snicker3 ? "active" : ""} src={snicker3} onClick={() => setCurrentUpImg(snicker3)} />
                        </div>
                        <div className="img-small">
                            <img className={currentUpImg === snicker4 ? "active" : ""} src={snicker4} onClick={() => setCurrentUpImg(snicker4)} />
                        </div>
                    </div>

                </div>
                <div className="content-right">

                    <div className="title">Giày chạy bộ nam NEW BALANCE Performance M860E11</div>
                    <div className="price">3.695.000 đ</div>
                    <div className="size">Size: 30</div>

                    <div className="action">
                        <label className="quantity">Số lượng</label>

                        {/* <input type="number" min={1} value={1} /> */}

                        <input type="number" min={1} value={soluong} onChange={(event) => {
                            setSoluong(event.target.value)
                        }} />

                        <button className="buy">Chọn mua</button>
                    </div>

                </div>
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                    animationDisabled={true}
                    animationDuration={500}
                />
            )}

        </div>
    )
}
export default Product;



