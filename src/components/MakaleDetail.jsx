import { useParams } from 'react-router-dom';
import '../css/MakaleDetail.css';
import makaleData from '../json/makales.json';
import makaleDetailLine from '../assets/image/makale/sunLine.png';
import ucanKalem from '../assets/image/makale/ucanKalem.png';
import starMakale from '../assets/image/makale/starMakale.png';

export default function MakaleDetail() {
    const {id} = useParams();
    const makaleId = parseInt(id);
    ///n bir alt satıra geçirmesi için yazılan fonksiyon
    const renderDescription = () => {
        // Her bir satırı bir <p> elementi içinde döndür
    return makaledata.description.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
    ));
}
    const makaledata = makaleData.find(makale => makale.id === makaleId )
    return(
        <>
            <div className="makaleDetailContainer">
                <div className="makaleDetailImg">
                    <h2>{makaledata.title}</h2>
                    <img className='makdetailimg' src = {makaledata.image} alt="makaleImage" />
                    <img className='makaleLine' src={makaleDetailLine} alt="line" />
                </div>
                <img className='ucankalemmakale' src={ucanKalem} alt=""/>

                <div className="makaleDetailText">
                    <p>{renderDescription()}</p>
                </div>
                <img className='starmakale' src={starMakale} alt=""/>

            </div>
        </>
    )
}