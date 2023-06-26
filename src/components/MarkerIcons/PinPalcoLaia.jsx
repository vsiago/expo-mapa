import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/iconsCaras/muitoRuimIcon.png';
import './pinpalcolaia.css';
import PalcoLaia from '../../ModelSetoresExpo/PalcoLaia';

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
                <img src={PalcoLaia.URLImg} alt="" />
              </div>
              <div className='containerIntro'>
                <h1>{PalcoLaia.name}</h1>
                <p>{PalcoLaia.description}</p>
              </div>
            </header>
            <footer>
              <nav>
              <h3>TODAS AS ATRAÇÕES:</h3>
                <ul className='navAtracoes'>
                  {PalcoLaia.atracoes.map((atracao) => (
                    <li><p key={atracao.id} name={atracao.name}>{atracao.name}</p></li>
                  ))}
                </ul>
              </nav>
            </footer>
          </main>
        </Popup>
    </Marker>
  );
};

export default PinPalcoLaia;
