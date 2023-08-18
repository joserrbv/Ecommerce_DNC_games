import React, { useEffect, useState } from 'react';
import '../Home/index.scss';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import propaganda from '/propaganda.svg'


//api

export const Home = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(()=>{
  

    (async()=>{

      const resApiProdutos = await fetch('https://fakestoreapi.com/products');
      const apiProdutos = await resApiProdutos.json();

      setProdutos(apiProdutos);
      
    })()
    

}, [])

  return (
    <div className='home'>
      <Nav />
      <img className='home__propaganda' src={propaganda} alt="" />
      <div className='home__conteiner'>
        {
          produtos.map(produto => (<ProdutoCard key={produto.id} produto={produto} />))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home