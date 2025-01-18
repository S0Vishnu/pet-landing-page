import image from "../assets/cat.png"

export default function CatModel() {
    return(
        <div className="cat-container">
            <img src={image} alt="" />
        </div>
    )
}