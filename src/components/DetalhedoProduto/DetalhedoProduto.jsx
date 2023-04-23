import { Link } from "react-router-dom";
import React from "react";
import "./index.scss";
import carrinhoDir from "../../assets/carrinhoDir.svg";

const DetalhedoProduto = ({ dados }) => {
  //   console.log(dados);
  return (
    <div className="Detalhedoproduto">
      <div className="Detalhedoproduto_esquerdo">
        <div className="Detalhedoproduto__card">
          <img src={dados.imagem} alt="" />
          <p>{dados.nome}</p>
        </div>
        <div
          className="Detalhedoproduto__descricao, border-bottom"
          style={{ paddingBottom: "10px" }}
        >
          <h2>Descrição</h2>

          <label>{dados.descricao}</label>
        </div>
      </div>
      <div className="Detalhedoproduto_direito">
        <div className="Detalhedoproduto_direito_nome">
          <h2 className="border-bottom">{dados.nome}</h2>
        </div>
        <div className="preco">
          <p>{dados.preco}</p>
        </div>
        <div className="Detalhedoproduto_direito_cor">
          Cor:{" "}
          {dados.cor.length === 1
            ? dados.cor.map((cor, index) => <span key={index}>{cor}</span>)
            : dados.cor.map((cor, index) =>
                index + 1 === dados.cor.length ? (
                  <span key={index}>{cor}</span>
                ) : (
                  <span key={index}>{cor}, </span>
                )
              )}
        </div>
        <div className="Detalhedoproduto__cubocor">
          {dados.cor.map((cor) => (
            <div
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "10px",
                backgroundColor: cor,
                border: "none ",
              }}
            >
              {" "}
            </div>
          ))}
        </div>

        <button
          className="Detalhedoproduto_direito_button"
          type="button"
          onClick={() => {
            console.log("click");
            {
              {
                modal.style.display = "block";
              }
            }
          }}
        >
          <img src={carrinhoDir} alt="" srcset="" />
          Adicionar ao Carrinho
        </button>
      </div>
      {/* modal 1 */}

      <div id="modal">
        <div id="modal_content">
          <div className="left">
            <img src={dados.imagem} alt="" style={{ marginTop: "10%" }} />
          </div>
          <div className="right">
            <h2 className="right_titulo"> Meu Carrinho </h2>

            <h1 id="border-bottom">{dados.nome}</h1>

            <p
              style={{
                fontSize: "32px",
                marginBottom: "27px",
                fontWeight: "900",
                marginTop: "27px",
                fontFamily: "Inter",
              }}
            >
              {dados.preco}
            </p>

            <h5>cor: {dados.cor} </h5>

            <div className="Detalhedoproduto__cubocor">
              {dados.cor.map((cor) => (
                <div
                  style={{
                    width: "40px",
                    height: "35px",
                    borderRadius: "10px",
                    backgroundColor: cor,
                    border: "none ",
                  }}
                >
                  {" "}
                </div>
              ))}
            </div>
            <div className="botoes">
              <button className="botoes_one">
                <Link to={`/home/`}> Continuar Comprando</Link>
              </button>

              <button
                className="botoes_two"
                onClick={() => {
                  console.log("click");
                  {
                    {
                      modalPay.style.display = "flex";
                    }
                  }
                }}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*     termina 1     */}

      {/* inicia modal 2 */}

      
      <div className="modalPay" id="modalPay">
          <div className="modalPay__content">
            <form className="modalPay__form">
              <h1>Finalizar compra:</h1>
              <label className="modalPay__label">Digite seu nome:</label>
              <input className="modalPay__input" type="text" placeholder="Nome completo" />
              <label className="modalPay__label">Digite seu CPF:</label>
              <input className="modalPay__input" type="text" placeholder="CPF completo" />
              <label className="modalPay__label">Endereço:</label>
              <input className="modalPay__input" type="text" placeholder="*****" />
              <label className="modalPay__label">Forma de Pagamento:</label>
              <input className="modalPay__input" type="text" placeholder="*****" />
              <button type="submit">
                <Link to={"/home"}>Confirmar Pedido</Link>
              </button>
            </form>
          </div>
        </div>
       
      


     

    </div>
  );
};

export default DetalhedoProduto;
