import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './Navegacao'; 
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';



export function App() {
  const [paginaSelcionada, atualizarPaginaSelecionada] = useState(0);
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];

  return <>
  <img src={Hashtaurante} alt="" className='capa' />
  <h1>Titulo da minha pagina em React</h1>
  <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
  <div className='menu'>
    {paginasMenu[paginaSelcionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
  </div>
  </>
}

