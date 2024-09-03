import './description.css'
import EthereumImage from '/images/icon-ethereum.svg';
import ClockImage from '/images/icon-clock.svg';

export default function Description(){
    return (
        <>
            <h1 id='head-text'>Equilibrium #3429</h1>
            <p id='description-text'>Our Equilibrium collection promotes balance and calm.</p>
            <div className="div1">
                <div className="div1-1">
                    <img src={EthereumImage} alt="ethereum" />
                    <h1>0.041 ETH</h1>
                </div>
                <div className="div1-2">
                    <img src={ClockImage} alt="clock" />
                    <h1>3 days left</h1>
                </div>
            </div>
        </>
    )
}