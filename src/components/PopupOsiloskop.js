import Popup from 'reactjs-popup';
import osiloskopIcon from '../asset/icons/osiloskop.svg'

const PopupOsiloskop = ({ osiloskopValue, setOsiloskopValue, drawAndCapture}) => {
    const handleSumbit = e => {
        e.preventDefault()
        drawAndCapture()
        setOsiloskopValue({
            voltDivValue: osiloskopValue.voltDivValue,
            timeDivValue: osiloskopValue.timeDivValue,
        })
        // document.querySelector('.keterangan').innerHTML= `Parameter berhasil diubah!`
        console.log(osiloskopValue)
    }
    const handleRadio = (e) => {
        if(e.target.value === 'volt') {
            document.querySelector('.input-volt').style.display = 'block'
            document.querySelector('.input-time').style.display = 'none'
        }
        else if(e.target.value === 'time') {
            document.querySelector('.input-volt').style.display = 'none'
            document.querySelector('.input-time').style.display = 'block'
        }
    }
    return (
        <Popup trigger={<button className="osiloskop-btn ar-session-btn btn-edited"><img src={osiloskopIcon} alt='osiloskop icon' /></button>} modal>
            <form className="box-modal" onSubmit={handleSumbit}>
                <div className="input-menu">
                    <label htmlFor="indikator">Indikator: </label>
                    <select name="indikator" id="indikator" onChange={handleRadio}>
                        <option value="volt">Volt/Div</option>
                        <option value="time">Time/Div</option>
                    </select>
                </div>
                <section className='input-frequency'>
                    <input 
                        type="number" 
                        step="any"
                        style={{"display": "block"}}
                        className='input-freq-form input-text input-volt'
                        placeholder='Volt/Div (V)'
                        onChange={(e) => osiloskopValue.voltDivValue = e.target.value}
                    />
                    <input 
                        type="number"
                        step="any"
                        style={{"display": "none"}}
                        className='input-freq-form input-text input-time'
                        placeholder='Time/Div (s)'
                        onChange={(e) => osiloskopValue.timeDivValue = e.target.value}
                    />
                    <button className='change-osiloskop-btn'>Ubah</button>
                </section>
                <section className="keterangan-osiloskop"></section>
            </form>
        </Popup> 
    );
}
 
export default PopupOsiloskop;