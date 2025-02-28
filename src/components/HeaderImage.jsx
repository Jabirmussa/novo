import heroImage from '../assets/hero.png'
const HeaderImage = () => {
    return ( 
        <div className="hero header-image">
            <div className="hero-image cover-image">
                <img src={heroImage} alt="hero-image" />
            </div>
            <div className="wrapper">
                <div className="hero-content">
                    <h2>Queres uma planta personalizada?</h2>
                    <p>Faça parte da nossa plataforma! Preencha o formulário, envie seus projetos para avaliação e, se aprovados, comece a vendê-los.</p>
                    <a className='btn' href="#">
                        Fale connosco
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderImage;