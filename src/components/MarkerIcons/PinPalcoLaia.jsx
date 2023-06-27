import { icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/iconsCaras/muitoRuimIcon.png';
import './pinpalcolaia.css';
import PalcoLaia from '../../ModelProgramacaoExpo/PalcoLaia';

const PinPalcoLaia = ({ latitude, longitude }) => {
  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [50, 50],
  });

  const coordPinPalcoLaia = [latitude, longitude];

  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [timeoutRef, setTimeoutRef] = useState(null); // Referência para o setTimeout

  const handleClickBtnNull = () => {
    setItemSelecionado(null);
  };

  const handleItemClick = (item) => {
    clearTimeout(timeoutRef); // Limpa o timeout atual
    setItemSelecionado(item);
    const newTimeoutRef = setTimeout(() => {
      handleClickBtnNull();
    }, 5000);
    setTimeoutRef(newTimeoutRef); // Armazena a referência do novo setTimeout
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef); // Limpa o timeout ao desmontar o componente
    };
  }, [timeoutRef]);

  const renderAtracao = () => {
    if (itemSelecionado) {
      return (
        <header>
          <div className='img-container'>
            <img src={itemSelecionado.URLImg} alt='' />
          </div>
          <div className='containerIntro'>
            <h1>{itemSelecionado.name}</h1>
            <p>{itemSelecionado.description}</p>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className='img-container'>
            <img src={PalcoLaia.URLImg} alt='' />
          </div>
          <div className='containerIntro'>
            <h1>{PalcoLaia.name}</h1>
            <p>{PalcoLaia.description}</p>
          </div>
        </header>
      );
    }
  };

  return (
    <Marker position={coordPinPalcoLaia} icon={customIconPalcoLaia}>
      <Popup autoPan={false}>
        <main>
          <div className='btnHomePrgramacao' onClick={handleClickBtnNull}>BTN</div>
          {renderAtracao()}
          <footer>
            <nav>
              <h3>TODAS AS ATRAÇÕES:</h3>
              <ul className='navAtracoes'>
                {PalcoLaia.atracoes.map((atracao) => (
                  <li key={atracao.id}>
                    <p onClick={() => handleItemClick(atracao)}>{atracao.name}</p>
                  </li>
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
