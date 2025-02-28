
import './App.css';
import heroImage from './assets/hero.png'
import Card from './components/Card';
import Destaque from './components/Destaque';
import Header from './components/Header';
import HeaderImage from './components/HeaderImage';


function App() {
 return(
  <>
  <Header />
  <section className="hero">
        <div className="hero-image cover-image">
            <img src={heroImage} alt="hero-image" />
        </div>
        <div className="wrapper">
            <div className="hero-content">
                <h1>Construa com facilidade e baixo custo, aqui temos as melhores plantas</h1>
            </div>
        </div>
    </section>
    <Destaque />
    <div className="wrapper">
      <h2>Plantas arquitectonicas</h2>
      <div className="cards">
      <Card />
      <Card />
      <Card />
      </div>
      <div className='btn-centro'>
      <a className='btn' href="#">
          Todas as plantas
      </a>
      </div>
    </div>
    <HeaderImage />
    <div className="wrapper">
      <h2>Materiais de construcao</h2>
      <div className="cards">
      <Card />
      <Card />
      <Card />
      </div>
      <div className='btn-centro'>
      <a className='btn' href="#">
          Todas as plantas
      </a>
      </div>
    </div>
  </>
 )
}

export default App
