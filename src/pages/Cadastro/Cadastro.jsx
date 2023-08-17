import React from 'react'
import '../Cadastro/index.scss'
import { Link } from 'react-router-dom'

export const Cadastro = () => {
  return (
    <div className='cadastro'>
        <h1>Faça seu cadastro</h1>
        <form action="">
            <div className="one">
            <label htmlFor="">Nome completo</label>
            <input type="text" />
            </div>

            <div className="two">
            <label htmlFor="">Usuário</label>
            <input type="text" />
            </div>

            <div className="three">
            <label htmlFor="">senha</label>
            <input type="text" />
            </div>

           <Link to={`/Login/`}>
            <button type="submit"> Cadastrar</button>
            </Link>
            

        </form>
    </div>
  )
}

export default Cadastro