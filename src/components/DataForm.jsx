
import { IoMdArrowBack } from "react-icons/io";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";





const DataForm = () => {


  const navigate = useNavigate();

  


  const [descricao, setDescricao] = useState('');
  
  const handleChangeDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleVolta = () => {

    navigate("/home")
    
  };


  
  return (

   
       
    
      
    
    <div id="div-data" className="container">
      <form   className="form-data">
          
        <header className="header">
              <button onClick={handleVolta} className="back-button"><IoMdArrowBack  size={33}/></button>
      
      
            </header>
            <p className="p-desc">Para começarmos, precisamos de alguns dados</p>
        <div className="form-control">
      
          <input type="text" placeholder="Nome do Imóvel" required />
          <small>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede.</small>     
        </div>
       
        <div className="form-control">
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={handleChangeDescricao}
            maxLength="250"
            required
          />
          <small className="text-count">{descricao.length}/250</small>
        </div>
        <div className="form-control">
          <input type="text" placeholder="CEP" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Endereço" required />
          <div className="form-control same-line" >
        <input type="text" placeholder="Número" required />
        <input type="text" placeholder="Complemento" />
        </div>
      
        </div>
      
        <div className="form-control same-line">
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
        <button className="botao-continuar" type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default DataForm;