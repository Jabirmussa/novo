import casaSmal from '../assets/small.png';
const Card = () => {
    return ( 
        <div className="card">
            <div className="price">
                7,000 MZN
            </div>
            <div className="card-image cover-image">
                <img src={casaSmal} alt="" />
            </div>
            <div className="card-text">
                <h3>Casa pequena e moderna com 2 quartos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
     );
}
 
export default Card;