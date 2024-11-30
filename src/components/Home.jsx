
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTableView } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";




const Home = ( ) => {


  const [showConfirm, setShowConfirm] = useState(false);

  // pegar os dados que foram armazenados na outra pagina
   const location = useLocation();

   const {name} = location.state || {};


   // voltar a pagina quando clicado em voltar e ir para proxima pagina quando clickado em registrar imovel

  const navigate = useNavigate();

  
   // caso o botão de voltar seja apertado mostra a modal perguntando se o usuario realmente quer sair da pagina
  const handleVolta = (e) => {

    e.preventDefault();
    setShowConfirm(true);

   

  }
   // logica  contendo a modal com os botoes que recebem as funcoes do que fazer caso confirmado ou cancelado
  const ConfirmationDialog = ({ onConfirm, onCancel }) => (
    <div className="modal-overlay" onClick={handleCancel}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <p>Você, realmente, deseja sair do poundsflats?</p>
      <div className="botao-modal-div">
        <button className="botao-modal-confirma" onClick={handleConfirm}>Sim, sair agora!</button>
        <button  className="botao-modal-cancela" onClick={handleCancel}>Não, quero continuar</button>
      </div>
    </div>
  </div>
);


// se confirmado fecha a modal e volta pra tela de login
const handleConfirm = () => {
  setShowConfirm(false); 
  navigate("/"); 
};


// se cancelado apenas fecha a modal
const handleCancel = () => {
  setShowConfirm(false); 
};


 // caso o usuario clique em algum botao de cadastrar imovel leva pra pagina de cadastro
  const handleClick = () => {
    navigate("/dados")
  }


  

 
  return (
    <div className="container">
      
      <header className="header">
        <button type="button" onClick={handleVolta}   className="back-button"><IoMdArrowBack  size={33}/></button>
      
       <button className="add-button" onClick={handleClick}>   <FaPlus size={18} /> Cadastrar imóvel</button>
      </header>
      <h2>Bem-vindo, {name}!</h2>

      
      <div className="filters">
        <button className="filter active">Todos os flats</button>
        <button className="filter">Indisponíveis</button>
      </div>

     
      <div className="empty-state">
        <span className="emoji"><FaRegFaceFrownOpen /></span>
        <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
        <button className="register-button" onClick={handleClick}>Cadastrar meu primeiro imóvel</button>
      </div>

      
      <footer className="footer">
        <span className="icon active"><FaRegBuilding  /></span>
        <span className="icon"><FaRegCalendarAlt /></span>
        <span className="icon"><RiTableView /></span>
        <span className="icon"><BsPerson /></span>
      </footer>
      {showConfirm && (<ConfirmationDialog onConfirm={handleConfirm} onCancel={handleCancel}/>)}
    </div> 

 

  );
  };
  
  export default Home;
  