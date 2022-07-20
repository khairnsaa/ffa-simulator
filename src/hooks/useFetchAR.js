import { useContext } from 'react';
import useFormula from '../hooks/useFormula';
import { ModuleContext } from '../context/ModuleContext';
import { useEffect } from 'react';

const useFetchAR = (modulId, title, indikatorValue, osiloskopValue) => {

    const {fc, 
        LPFRCFormula, 
        HPFRCFormula, 
        LPFRLFormula, 
        HPFRLFormula, 
        BPFFormula, 
        BSFFormula,
        ButterworthFormula,
        ChebychevFormula
    } = useFormula()
    const {getDetailModule} = useContext(ModuleContext)

    useEffect(() => {getDetailModule(modulId)}, [])

    const checkLab = () => {
        if(title !== undefined){
            if(title.includes("LPF RC")) {
                LPFRCFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.kapasitorValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.includes("LPF RL")) {
                LPFRLFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.induktorValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.includes("HPF RC")) {
                HPFRCFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.kapasitorValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.includes("HPF RL")) {
                HPFRLFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.induktorValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            }  else if(title.includes("Band Pass")) {
                BPFFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.resistorTwoValue), 
                    parseFloat(indikatorValue.kapasitorValue), 
                    parseFloat(indikatorValue.kapasitorTwoValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.toUpperCase().includes("NOTCH")) {
                BSFFormula(
                    parseFloat(indikatorValue.frequencyValue), 
                    parseFloat(indikatorValue.resistorValue), 
                    parseFloat(indikatorValue.kapasitorValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.toUpperCase().includes("BUTTERWORTH")) {
                ButterworthFormula(
                    parseFloat(indikatorValue.fcButterWorth),
                    parseFloat(indikatorValue.rButterworth),
                    parseFloat(indikatorValue.frequencyValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            } else if(title.toUpperCase().includes("CHEBY")) {
                ChebychevFormula(
                    parseFloat(indikatorValue.fcButterWorth),
                    parseFloat(indikatorValue.rButterworth),
                    parseFloat(indikatorValue.frequencyValue),
                    parseFloat(osiloskopValue.voltDivValue),
                    parseFloat(osiloskopValue.timeDivValue),
                )
            }
        }

    }

    return{checkLab, fc};
}

export default useFetchAR;