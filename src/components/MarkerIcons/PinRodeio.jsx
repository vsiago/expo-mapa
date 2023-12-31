import { icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/Rodeio/rodeio-icon.png';
import './pinpalcolaia.css';
import './pinrodeio.css'
import PalcoLaia from '../../ModelProgramacaoExpo/Rodeio';

const PinRodeio = ({ latitude, longitude }) => {
  useEffect(() => {
    const pin = document.querySelector('.leaflet-marker-icon')
    pin.addEventListener('click', () => {
      
    })
  },[])

  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [77, 114],
    popupAnchor: [250, 100]
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
          <div className='img-container'>
          <video id='videoRodeip' width="640" height="360" playsinline loop autoPlay>
        <source src="https://tonynascimento.com.br/wp-content/themes/tony-nascimento/img/video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
          </div>
          <div className='containerIntro'>
            {/* <h1 >Rodeio</h1> */}
            <img  src="https://tonynascimento.com.br/wp-content/themes/tony-nascimento/img/logo.png" alt="" />
            {/* <p>{PalcoLaia.description}</p> */}
          </div>
        </header>
      );
    }
  };

  return (
    <Marker position={coordPinPalcoLaia} icon={customIconPalcoLaia}>
      <Popup autoPan={true}>
        <main id='bgRodeio'>

          <div className='btnHomePrgramacao' onClick={handleClickBtnNull}></div>
          {renderAtracao()}
          {/* <footer id='footerRodeio'>
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

export default PinRodeio;
