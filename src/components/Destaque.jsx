import casa from '../assets/casa.png';
import casaSmal from '../assets/small.png';
const Destaque = () => {
    return ( 
        <section className="destaque">
            <div className="wrapper">
                <h2>Em destaque</h2>
                <div className="images">
                <div className="big-image cover-image">
                    <img src={casa} alt=""/>
                </div>
                <div className="small-images">
                    <div className="image cover-image">
                        <img src={casaSmal} alt=""/>
                    </div>
                    <div className="image cover-image">
                        <img src={casaSmal} alt=""/>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default Destaque;