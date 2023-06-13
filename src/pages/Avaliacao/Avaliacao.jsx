import React from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';

export default function Avaliacao() {
  return (
    <div className="avaliacao-container">
      <h1 className="fade-in">Pagina Avaliacao</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">voltar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
