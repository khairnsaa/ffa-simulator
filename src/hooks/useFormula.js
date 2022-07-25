import { useContext } from "react"
import { OutputWaveContext } from "../context/OutputWaveContext"
import { OutputResponseContext } from '../context/OutputResponseContext';


const useFormula = () => {
    const {draw} = useContext(OutputWaveContext)
    const {responseLPF, responseHPF, responseBPF, responseBSF, responseChebychev, responseButterworth} = useContext(OutputResponseContext)
    let fc=0;
    const LPFRCFormula = (freq, resistor, capacitor, voltDiv, timeDiv) => {
        fc = 1/(2*Math.PI*resistor*capacitor)
        responseLPF(fc, fc +100)
        if(fc > Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc + 100 > Number(freq)) draw(Number(freq) +100, voltDiv, timeDiv)
        else if(fc < Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `
                Berhasil diubah! <br> 
                fc: ${fc.toFixed(2)} Hz <br> 
                Resistor: ${resistor}Ω <br> 
                kapasitor: ${capacitor} F
            `
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }
    
    const LPFRLFormula = (freq, resistor, induktor, voltDiv, timeDiv) => {
        fc = resistor/(2*Math.PI*induktor)
        responseLPF(fc, fc + 100)
        if(  fc > Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc + 100 > Number(freq)) draw(Number(freq) +100, voltDiv, timeDiv)
        else if(fc < Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> R: ${resistor}Ω <br> Induktor: ${induktor} H`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const LPFLCFormula = (freq, kapasitor, induktor, voltDiv, timeDiv) => {
        fc = 1/(2*Math.PI * (Math.sqrt(induktor*kapasitor)))
        responseLPF(fc, fc + 100)
        console.log(fc)
        if(  fc > Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc + 100 > Number(freq)) draw(Number(freq) +100, voltDiv, timeDiv)
        else if(fc < Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> kapasitor: ${kapasitor}F <br> Induktor: ${induktor} H`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const HPFRCFormula = (freq, resistor, capacitor, voltDiv, timeDiv) => {
        fc = 1/(2*Math.PI*resistor*capacitor)
        responseHPF(fc, fc - 100)
        if(fc < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc - 100 < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc > Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> R: ${resistor}Ω <br> kapasitor: ${capacitor} F`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const HPFRLFormula = (freq, resistor, induktor, voltDiv, timeDiv) => {
        fc = resistor/(2*Math.PI*induktor)
        responseHPF(fc, fc - 100)
        if(fc < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc - 100 < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc > Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> R: ${resistor}Ω <br> induktor: ${induktor} F`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const HPFLCFormula = (freq, kapasitor, induktor, voltDiv, timeDiv) => {
        fc = 1/(2*Math.PI * (Math.sqrt(induktor*kapasitor)))
        responseHPF(fc, fc - 100)
        if(fc < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc - 100 < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc > Number(freq)) draw(0, voltDiv, timeDiv)
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> kapasitor: ${kapasitor}F <br> induktor: ${induktor} F`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const BPFFormula = (freq, rOne, rTwo, cOne, CTwo, voltDiv, timeDiv) => {
        const fcl = 1/(2*Math.PI*rOne*cOne)
        const fch = 1/(2*Math.PI*rTwo*CTwo)
        responseBPF(fcl, fch, fcl-100, fch+100)
        console.log(voltDiv, timeDiv)
        if(fcl < Number(freq) && fch > Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fcl-100 < Number(freq)  && fch+100> Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fcl > Number(freq) && fch > Number(freq)) draw(0, voltDiv, timeDiv)
        else if(fcl < Number(freq) && fch < Number(freq)) draw(0, voltDiv, timeDiv)
        else if(fcl > Number(freq)  && fch < Number(freq)) draw(0, voltDiv, timeDiv)

        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `
                Berhasil diubah! <br> 
                fc Low: ${fcl.toFixed(2)} Hz<br> 
                fc High: ${fch.toFixed(2)} Hz<br> 
                R1: ${rOne} Ω <br> 
                R2: ${rTwo} Ω <br> 
                C1: ${cOne} F<br>
                C2: ${CTwo} F
            `
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const BSFFormula = (freq, resistor, capacitor, voltDiv, timeDiv) => {
        fc = 1/(2*Math.PI*resistor*capacitor)
        responseBSF(fc)
        if(fc === Number(freq)) draw(0, voltDiv, timeDiv)
        else  if(fc < Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc - 100 < Number(freq)) draw(0, voltDiv, timeDiv)
        else if(fc > Number(freq)) draw(freq, voltDiv, timeDiv)
        else if(fc + 100 > Number(freq)) draw(0, voltDiv, timeDiv) 
        
        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `Berhasil diubah! <br> fc: ${fc.toFixed(2)} Hz <br> R: ${resistor}Ω <br> Kapasitor: ${capacitor} F`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }

    const ButterworthFormula = (fc, r, fin, voltDiv, timeDiv) => {
        const capacitor = (1/ (2*Math.PI*fc*r))*1000000000
        const inductor = (r*2)/(2*Math.PI*fc)
        responseButterworth()
        if(fc > Number(fin)) draw(fin, voltDiv, timeDiv)
        else if(fc + 100 > Number(fin)) draw(Number(fin) +100, voltDiv, timeDiv)
        else if(fc < Number(fin)) draw(0)

        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `
            Berhasil diubah! <br> 
            fc: ${fc.toFixed(2)} Hz <br> 
            RS: ${r.toFixed(2)} Ω <br>
            RL: ${r.toFixed(2)} Ω <br>
            C1 : ${capacitor.toFixed(2)} nF <br>
            C2: ${capacitor.toFixed(2)} nF <br>
            L1: ${inductor.toFixed(2)} H`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }
    
    const ChebychevFormula = (fc, r, fin, voltDiv, timeDiv) => {
        const capacitorOne = (1.864/ (2*Math.PI*fc*r))*1000000000
        const capacitorTwo = (1.834/ (2*Math.PI*fc*r))*1000000000
        const inductor = (r*1.280)/(2*Math.PI*fc)*100
        responseChebychev()
        if(fc > Number(fin)) draw(fin, voltDiv, timeDiv)
        else if(fc + 100 > Number(fin)) draw(Number(fin) +100, voltDiv, timeDiv)
        else if(fc < Number(fin)) draw(0, voltDiv, timeDiv)
        console.log('fin ' + fin)
        console.log('r ' + r)
        console.log('fc ' + fc)
        console.log('induktor 1 ' + (inductor))
        console.log('capacitor 2 ' + capacitorTwo)

        if(document.querySelector('.keterangan')) {
            document.querySelector('.keterangan').innerHTML = `
            Berhasil diubah! <br> 
            fc: ${fc.toFixed(2)} Hz <br> 
            RS: ${r.toFixed(2)} Ω <br>
            RL: ${r.toFixed(2)} Ω <br>
            C1 : ${capacitorOne.toFixed(2)} nF <br>
            C2: ${capacitorTwo.toFixed(2)} nF <br>
            L1: ${inductor.toFixed(2)} mH`
        } else if(document.querySelector('.keterangan-osiloskop')) {
            document.querySelector('.keterangan-osiloskop').innerHTML = `
                Berhasil diubah! <br> 
                volt/div: ${voltDiv} V <br />
                time/div: ${timeDiv} s
            `
        }
    }
    
    return {
        LPFRCFormula,
        LPFRLFormula,
        LPFLCFormula,
        HPFRCFormula,
        HPFRLFormula,
        HPFLCFormula,
        BPFFormula,
        BSFFormula,
        ButterworthFormula,
        ChebychevFormula
    };
}
 
export default useFormula;