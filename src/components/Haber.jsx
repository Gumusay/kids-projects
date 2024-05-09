import '../css/Haber.css';
import haberData from '../json/habers.json';
import { Link } from 'react-router-dom';
import haberText from '../assets/image/haber/haberTxt.png'

export default function Haber() {
    return(
        <>
            <div className='haberImage'>
                <img src={haberText} alt="haberText" />
            </div>

            <div className="haberContainer">
                
                <div className='leftHaber'>
                    {haberData.map((haber) => (
                        <div className='haberItem' key={haber.id}>
                            <Link className='haber-link-left' to={`/haber/${haber.id}`}>
                                <img width={429} height={300} src={haber.image} alt="ımageHaber" />
                                <h2>{haber.title}</h2>
                                <p>{haber.date}</p>
                                <p>{haber.content}</p>
                            </Link>
                        </div>   
                    ))} 
                </div> 

                <div className='rightHaber'>   
                    {haberData.slice(0, 6).map((haber) => (
                        
                        <Link className='haber-link-right' to={`/haber/${haber.id}`}>
                            <img width={263} height={198} src={haber.image} alt="ımageHaber" />
                            <h2>{haber.title}</h2>
                            <p>{haber.content}</p>
                        </Link>
                        
                    ))}
                </div>  

            </div>
        </>
    )
}