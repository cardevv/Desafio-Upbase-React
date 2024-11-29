import { useNavigate } from 'react-router-dom';
import img from '../assets/imagens/poundsflatslogo.png'
import { useForm } from 'react-hook-form';


const UserForm = () => {

    const{register , handleSubmit} = useForm();

  

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