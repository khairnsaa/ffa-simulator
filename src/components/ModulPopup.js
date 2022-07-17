import modulIcon from '../asset/icons/modul_icon.svg'
import Popup from 'reactjs-popup';

const ModulPopup = () => {
    return (
        <Popup trigger={<button className='frequency-btn ar-session-btn btn-edited'><img src={modulIcon} alt="" /></button>} position="top left">
            {close => (
                <form className="box-modal">
                    <div className="input-menu">
                        <label htmlFor="indikator">Indikator: </label>
                        <select name="indikator" id="indikator">
                            <option value="frekuensi">frekuensi</option>
                            <option value="resistor">Resistor</option>
                        </select>
                    </div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                </form>
            )}
        </Popup>
    );
}
 
export default ModulPopup;