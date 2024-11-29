import './App.css';
import './index.css'
// Components
import Home from './components/Home';
import UserForm from './components/UserForm';
import DataForm from './components/DataForm';
// Hooks
import { useForm } from './hooks/useForm';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  const formComponents = [
    <UserForm  />, // Passando changeStep como prop
    <Home  />, // Passando changeStep como prop
    <DataForm />
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep, isDados, isHome } = useForm(formComponents);

  return (

    <Router>
      <Routes>
      <Route path="/" element={UserForm}></Route>
      <Route path='/home' element={Home}></Route>
      <Route path='/dados' element={DataForm}></Route>

      </Routes>
     


    </Router>
   
  );
}

export default App;
