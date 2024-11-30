
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTableView } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";




const Home = ( ) => {

  // pegar os dados que foram armazenados na outra pagina
   const location = useLocation();

   const {name} = location.state || {};

  const navigate = useNavigate();

  

  const handleVolta = () => {

    navigate("/");

  }

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
    </div>
  );
  };
  
  export default Home;
  