import { useForm } from "../hooks/useForm";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTableView } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";




const Home = (formComponents) => {

  const {currentStep, currentComponent , changeStep , isFirstStep , isLastStep , isDados , isHome} = useForm(formComponents)
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <button onClick={() => changeStep(currentStep -1)} className="back-button"><IoMdArrowBack  size={33}/></button>
        
       <button className="add-button">   <FaPlus size={18} /> Cadastrar imóvel</button>
      </header>
      <h2>Bem-vindo, Raphael!</h2>

      {/* Filters */}
      <div className="filters">
        <div className="filter active">Todos os flats</div>
        <div className="filter">Indisponíveis</div>
      </div>

      {/* Empty State */}
      <div className="empty-state">
        <span className="emoji"><FaRegFaceFrownOpen /></span>
        <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
        <button className="register-button">Cadastrar meu primeiro imóvel</button>
      </div>

      {/* Footer Navigation */}
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
  