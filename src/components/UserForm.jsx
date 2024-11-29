import img from '../assets/imagens/poundsflatslogo.png'

const UserForm = () => {
    return(
        <div className="form-login">
            <img src={img} alt="logo poundsflats"  id="logo"/>
            
            <div className="form-control">
            <label htmlFor="name"></label>
            <input type="text" 
            name="text" 
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
            placeholder="Digite seu email"
            
            />
                
            </div>
        </div>
       
    );
};

export default UserForm;