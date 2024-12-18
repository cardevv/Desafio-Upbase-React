import { useState } from "react";


// primeira tentativa de função para passar pra proxima tela que acabei mudando para react router.

export function useForm(steps) {

    const [currentStep, setCurrentStep ] = useState(0)

    function changeStep(i, e) {
        if(e)  e.preventDefault();
     
         if(i < 0 || i >= steps.length) return ;
             setCurrentStep(i);
         
     }

    return {

        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isHome: currentStep === 1 ? true : false,
        isDados: currentStep ===2 ? true : false
        
    };


}