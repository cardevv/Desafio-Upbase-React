import { useForm } from "../hooks/useForm";
import { IoMdArrowBack } from "react-icons/io";
import React, { useState } from 'react';




const DataForm = (formComponents) => {

    const {currentStep, currentComponent , changeStep , isFirstStep , isLastStep , isDados , isHome} = useForm(formComponents)
  const [descricao, setDescricao] = useState('');
  
  const handleChangeDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado!');
  };


  
  return (

   
       
    
      
    
    <form >
        
  <header className="header">
            <button onClick={() => changeStep(currentStep -1)} className="back-button"><IoMdArrowBack  size={33}/></button>
        
        
          </header>
          <p>Para começarmos, precisamos de alguns dados</p>
      <div>
        
  
        <input type="text" placeholder="Nome do Imóvel" required />
        <small>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede.</small>
      </div>

      <div>
        <textarea 
          placeholder="Descrição" 
          value={descricao} 
          onChange={handleChangeDescricao} 
          maxLength="250" 
          required 
        />
        <small>{descricao.length}/250</small>
      </div>

      <div>
        <input type="text" placeholder="CEP" required />
      </div>

      <div>
        <input type="text" placeholder="Endereço" required />
        <input type="text" placeholder="Número" required />
        <input type="text" placeholder="Complemento" />
      </div>

      <div>
        <input type="text" placeholder="Cidade" required />
        <select required>
          <option value="">Selecione o UF</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </div>

      
    </form>
  );
};

export default DataForm;