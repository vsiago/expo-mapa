import { icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/Fazendinha/fazendinha-icon.png';
import './pinpalcolaia.css';
import './pinfazendinha.css';
import PalcoLaia from '../../ModelProgramacaoExpo/Fazendinha';

const PinFazendinha = ({ latitude, longitude }) => {
  useEffect(() => {
    const pin = document.querySelector('.leaflet-marker-icon')
    pin.addEventListener('click', () => {
      
    })
  },[])

  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [77, 114],
    popupAnchor: [400, -150]
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
    }, 15000);
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
          <div id='img-container'>
            <img src={itemSelecionado.URLImg} alt='' />
          </div>
          <div id='containerIntro'>
            <h1 style={{textAlign: 'center'}}>{itemSelecionado.name}</h1>
            <table style={{ borderCollapse: 'collapse', marginTop: '-5px'}}>
                <thead>
                  <tr style={{height: '10px', background: 'rgba(0,0,0,.5)'}}>
                    
                        <th style={{color: 'yellow', fontSize: '1.2rem', padding: '10px'}}>{itemSelecionado.hora1}</th>
                        <th style={{color: 'yellow', fontSize: '1.2rem', padding: '10px'}}>{itemSelecionado.hora2}</th>
                        <th style={{color: 'yellow', fontSize: '1.2rem', padding: '10px'}}>{itemSelecionado.hora3}</th>
                        <th style={{color: 'yellow', fontSize: '1.2rem', padding: '10px'}}>{itemSelecionado.hora4}</th>
                        <th style={{color: 'yellow', fontSize: '1.2rem', padding: '10px'}}>{itemSelecionado.hora5}</th>
                    </tr>
                </thead>
                <tbody style={{height: '200px'}}>
                <tr style={{height: '44px', background: 'rgba(0,0,0,.1)'}}>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at1}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at2}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at3}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at4}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at21}</td>
                    </tr>
                    <tr style={{height: '44px', background: 'rgba(0,0,0,.2)', marginBottom: '4px'}}>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at5}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at6}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at7}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at8}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at22}</td>
                    </tr>
                    <tr style={{height: '44px', background: 'rgba(0,0,0,.1)'}}>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at9}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at10}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at11}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at12}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at23}</td>

                    </tr>
                    <tr style={{height: '44px', background: 'rgba(0,0,0,.2)', marginBottom: '4px'}}>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at13}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at14}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at15}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at16}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at24}</td>
                    </tr>
                    <tr style={{height: '50px', background: 'rgba(0,0,0,.1)', marginBottom: '4px'}}>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at17}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at18}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at19}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at20}</td>
                      <td style={{paddingLeft: '10px'}}>{itemSelecionado.at25}</td>
                    </tr>
                </tbody>
            </table>    
          </div>
        </header>
      );
    } else {
      return (
        <header className='fade-in'>
          <div style={{paddingLeft: '60px', height: '110%'}} className='img-container'>
            <img src={PalcoLaia.URLImg} alt='' />
          </div>
          <div className='containerIntro'>
            <h1 id='tituloPrincipal'>{PalcoLaia.name}</h1>
            <span id='abertura'>ABERTURA</span>
            <p style={{fontSize: 32}}>11h da manhã</p>
            <p>{PalcoLaia.description}</p>
          </div>
        </header>
      );
    }
  };

  return (
    <Marker position={coordPinPalcoLaia} icon={customIconPalcoLaia}>
      <Popup autoPan={true}>
        <main id='bgFazendinha'>
          <div className='btnHomePrgramacao' onClick={handleClickBtnNull}></div>
          {renderAtracao()}
          <footer id='footerFazendinha'>
            <nav>
              <h3>TODAS AS ATRAÇÕES:</h3>
              <ul className='navAtracoes'>
                {PalcoLaia.atracoes.map((atracao) => (
                  <li onClick={() => handleItemClick(atracao)} key={atracao.name}>
                    <p id='data'>{atracao.data}</p>
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

export default PinFazendinha;
