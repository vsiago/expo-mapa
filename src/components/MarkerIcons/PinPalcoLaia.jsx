import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/iconsCaras/muitoRuimIcon.png';
import './pinpalcolaia.css';

const PinPalcoLaia = ({ latitude, longitude }) => {
  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [50, 50], // Defina o tamanho do ícone
  });

  const coordPinPalcoLaia = [latitude, longitude];


  return (
    <Marker
      position={coordPinPalcoLaia}
      icon={customIconPalcoLaia}
    >
        <Popup autoPan={false} >
          <main>
            <header>
              <div className='img-container'>
                <img src="./img/PalcoLaia/palco-laia.png" width={480} alt="" />
              </div>
              <div className='containerIntro'>
                <h1>Palco Laiá</h1>
                <p>Palco principal da Expo Itaguaí completo de celebridades nacionais. As melhores atrações do Brasil já passaram por aqui.</p>
              </div>
            </header>
            <footer>
              <nav>
              <h3>TODAS AS ATRAÇÕES:</h3>
                <ul className='navAtracoes'>
                  <li>img 1</li>
                  <li>img 2</li>
                  <li>img 3</li>
                  <li>img 4</li>
                  <li>img 5</li>
                  <li>img 6</li>
                  <li>img 7</li>
                  <li>img 7</li>
                  <li>img 7</li>
                  <li>img 7</li>
                </ul>
              </nav>
            </footer>
          </main>
        </Popup>
    </Marker>
  );
};

export default PinPalcoLaia;
