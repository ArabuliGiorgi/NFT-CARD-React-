import './image.css'
import EquilibriumImage from "/images/image-equilibrium.jpg";

export default function Image(){
    return (
        <div className='image-div'>
            <img src={EquilibriumImage} alt="Equilibrium" />
        </div>
    );
}