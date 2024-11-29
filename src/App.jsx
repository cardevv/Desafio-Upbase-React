
import './App.css'
//Components
import Home from './components/Home';
import UserForm from './components/UserForm';
import DataForm from './components/DataForm';
 import { GrLinkNext , GrFormNext } from "react-icons/gr";


 //Hooks

import { useForm } from './hooks/useForm';


function App() {

  const formComponents = [
    <UserForm></UserForm>,
      <Home></Home>,
      <DataForm></DataForm>
  ];

  const {currentStep, currentComponent , changeStep , isFirstStep , isLastStep , isDados , isHome} = useForm(formComponents)


  return (
     <div className="app">
      <div className="header">
        
      </div>
      <div>
        
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {!isFirstStep && !isHome &&  (
              <button type="button" onClick={() => changeStep(currentStep -1)}>
              <span>Voltaraaaaa</span>
              

            </button>
            )}
            {!isLastStep && !isHome ? (<div className='div-entrar'>
              <button  type='submit'>
                <span >Entrar</span>
                
                </button>
            </div>) : ""}
            </div>
        </form>
      </div>
     </div>
  )
}

export default App
