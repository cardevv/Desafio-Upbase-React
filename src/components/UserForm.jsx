import { useNavigate } from 'react-router-dom';
import img from '../assets/imagens/poundsflatslogo.png'
import { useForm } from 'react-hook-form';


const UserForm = () => {


    //hook useform pra conseguir amarzenar os dados que o usuario digitou e usar em outra pagina

    const{register , handleSubmit} = useForm();

  
  // logica para pegar trocar a pagina e guardar os dados quando o usuario apertar o botão do form
    const navigate = useNavigate();



    const onSubmit = (data) => {
       console.log(data);
       
       navigate("/home" , {state:data});
    }

   
    return(
        
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}  >
                <img src={img} alt="logo poundsflats"  id="logo"/>
            
                <div className="form-control">
                <label htmlFor="name"></label>
                <input type="text"
            
                {...register("name")}
                id="name"
                placeholder="Digite seu nome"
                required
                />
            
                </div>
                <div className="form-control">
                <label htmlFor="password"></label>
                <input type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
            
            
                />
            
                </div>
                <div className='div-entrar'>
                    <button className="botao-continuar" type="submit">Entrar</button>
            
                </div>
            </form>
       
       
    );
};

export default UserForm;