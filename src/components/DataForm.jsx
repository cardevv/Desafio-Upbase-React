import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";







const DataForm = () => {


 // https://viacep.com.br/ws/01001000/json/
 const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})
  
  const [cep, setCep] = useState('');
    const [informacoes, setInformacoes] = useState({
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
    });
   

    // fazer requisão dos dados pelo cep inserido pelo usuario na api ViaCep
  const buscarEndereco = (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (response.data && !response.data.erro) {
                setInformacoes(response.data);
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o CEP:', error);
        });
};

   //  definir o cep que o usuario digitou e se o cep tiver 8 digitos faz a busca na API
   const handleCepChange = (e) => {
    const novoCep = e.target.value;
    setCep(novoCep);

    if (novoCep.length === 8) { // Verifica se o CEP tem 8 dígitos
        buscarEndereco(novoCep);
    }
};

    

 
  const navigate = useNavigate();
  

  

 // logica pra mostrar o numero de caracteres confome o usuario digita
  const [descricao, setDescricao] = useState('');
  
  const handleChangeDescricao = (e) => {
    setDescricao(e.target.value);
  };
  
  const [showConfirm, setShowConfirm] = useState(false);

 // logica pra trocar de pagina quando o botão for pressionado 
 const handleVolta = (e) => {

  e.preventDefault();
  setShowConfirm(true);

 

}

// logica  contendo a modal com os botoes que recebem as funcoes do que fazer caso confirmado ou cancelado
const ConfirmationDialog = ({ onConfirm, onCancel }) => (
  <div className="modal-overlay" onClick={handleCancel}>
  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>Deseja abandonar o cadastro do imóvel? Esta operação não será salva.</p>
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
  navigate("/home"); 
};

// se cancelado apenas fecha a modal
const handleCancel = () => {
  setShowConfirm(false); 
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
          className="desc-input"
            placeholder="Descrição"
            value={descricao}
            onChange={handleChangeDescricao}
            maxLength="250"
            required
          />
          <small className="text-count">{descricao.length}/250</small>
        </div>
        <div className="form-control">
          <input type="text" placeholder="CEP"  onChange={handleCepChange}  required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Endereço" value={informacoes.logradouro} required readOnly />
          <div className="form-control same-line" >
        <input type="text" placeholder="Número" />
        <input  value={informacoes.complemento} type="text" placeholder="Complemento"  />
        </div>
      
        </div>
      
        <div className="form-control same-line">
          <input type="text" placeholder="Cidade" required  value={informacoes.localidade}/>
          <select required value={informacoes.uf}>
            <option >Selecione o UF</option>
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
      {showConfirm && (<ConfirmationDialog onConfirm={handleConfirm} onCancel={handleCancel}/>)}
    </div>
  );
};

export default DataForm;