import { icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/MariaBonita/maria-icon.png';
import './pinpalcolaia.css';
import './pinmariabonita.css';
import PalcoLaia from '../../ModelProgramacaoExpo/MariaBonita';

const PinMariaBonita = ({ latitude, longitude }) => {
  useEffect(() => {
    const pin = document.querySelector('.leaflet-marker-icon')
    pin.addEventListener('click', () => {
      
    })
  },[])

  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [77, 114],
    popupAnchor: [200, 0]
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
    }, 8000);
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
        <header className='fade-in'>
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
        <header className='fade-in'>
          <div id='#img-container-maria' className='img-container'>
            <img src={PalcoLaia.URLImg} alt='' />
          </div>
          {/* <div className='containerIntro'>
            <h1>{PalcoLaia.name}</h1>
            <p>{PalcoLaia.description}</p>
          </div> */}
        </header>
      );
    }
  };

  return (
    <Marker position={coordPinPalcoLaia} icon={customIconPalcoLaia}>
      <Popup autoPan={true}>
        <main id='bgMariaBonita'>
          <div className='btnHomePrgramacao' onClick={handleClickBtnNull}></div>
          {renderAtracao()}
          {/* <footer id='footerMariaBonita'>
            <nav>
              <h3>TODAS AS ATRAÇÕES:</h3>
              <ul className='navAtracoes'>
                {PalcoLaia.atracoes.map((atracao) => (
                  <li onClick={() => handleItemClick(atracao)} key={atracao.name}>
                    <img src={atracao.icon} alt="" />
                  </li>
                ))}
              </ul>
            </nav>
          </footer> */}
        </main>
      </Popup>
    </Marker>
  );
};

export default PinMariaBonita;
