import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import DetalhedoProduto from '../../components/DetalhedoProduto/DetalhedoProduto'
import { useParams } from 'react-router-dom'
import './index.scss'

const Produto = ({ dados }) => {
   const {produtoId} = useParams() ;
   
   const selectedProduto = dados.find(produto =>
     produto.id == produtoId)
  //  console.log(produtoId);

  return (
    <div>
      <Nav/>

      <DetalhedoProduto dados={selectedProduto}/>

            
      <Footer/>


      
    </div>
  )
}

export default Produto;