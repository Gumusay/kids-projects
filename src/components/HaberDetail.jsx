
import '../css/HaberDetail.css'
import { useParams } from 'react-router-dom';
import HaberData from '../json/habers.json';
import AuthorSel from '../../public/haber/authorSel.jpg';
import AuthorEce from '../../public/haber/authorEce.jpg';
import AuthorEro from '../../public/haber/authorEro.jpg';
import AuthorAkı from '../../public/haber/authorAkı.jpg';
import EndDeta from '../../public/haber/haber-deta-end.png';




export default function HaberDetail() {
    const { id } = useParams();
    const haberId = parseInt(id); 

    const haberdata = HaberData.find(haber => haber.id === haberId);
    ///n bir alt satıra geçirmesi için yazılan fonksiyon
    const renderDescription = () => {
        // Her bir satırı bir <p> elementi içinde döndür
        return haberdata.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    }
    return(
        
        <>
        
            <div className="HaberDetailContainer">
                <div className='leftHaberDetail'>
                    <div className="HaberDetailImg">
                        <img className='HbrDetailimg' src = {haberdata.image} alt="HaberImage" />   
                        <h2>{haberdata.title}</h2>
                    </div>

                    <div className='dateicontext'>
                        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                        <p>{haberdata.date}</p>
                    </div>

                    <div className="HaberDetailText">
                        <p> {renderDescription()}</p>
                    </div>

                </div>

                <div className='rightAuthorDetail'>
                    <h3>YAZARLAR</h3>
                    <div className='AuthorItem'>
                        <img width={45} height={40} src={AuthorEro} alt="" />
                        <h4>Erol Yeni</h4>
                    </div>
                    <div className='AuthorItem'>
                        <img width={40} height={40} src={AuthorSel} alt="" />
                        <h4>Selvi Güneş</h4>
                    </div>
                    <div className='AuthorItem'>
                        <img width={40} height={40} src={AuthorAkı} alt="" />
                        <h4>Akın Çiçek</h4>
                    </div>
                    <div className='AuthorItem'>
                        <img width={40} height={40} src={AuthorEce} alt="" />
                        <h4>Ece Ata</h4>
                    </div>
                    <img className='leftHaberDetailEnd' width={200} src={EndDeta} alt="" />

                    
                </div>
               

            </div>
        </>
    )
}