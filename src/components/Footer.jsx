import { Link } from 'react-router-dom';
import lineYellow from '../assets/image/header-footer/line-yellow.png';
import linePink from '../assets/image/header-footer/line-pink.png';

import logo from '../assets/image/header-footer/desktop-logo1.png';
import footerMix from '../assets/image/header-footer/footerMix.png';
import dinazor from '../assets/image/header-footer/dinazor.jpg';
import astronot from '../assets/image/header-footer/astronot.jpg';
import YapayZeka from '../assets/image/header-footer/yapay-zeka.jpg';


export default function Footer () {
    return(
        <>
        <div className="container-footer">
        <footer className="wrapper">
            <div className="custom-shape-divider-top-1709383127">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
                <div className="footerMix">
                    <div className='footer-text'>
                        <img src={logo} width={80} alt="logo" />
                        <p>Şaşırtıcı bulmacalar, öğretici etkinlikler ve yaratıcı oyunlarla dolu bu platformda her an yeni bir macera seni bekliyor</p>
                    </div>

                    <ul className='menu-header'>
                        <h3>SAYFALAR</h3>
                        <img width={100} height={15} src={lineYellow} alt="lineYellow" />

                        <li><Link to="/">ANASAYFA</Link></li>
                        <li><Link to="/makale">MAKALE</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/deney">DENEYLER</Link></li>
                        <li><Link to="/haber">HABER</Link></li>
                        <li><Link to="/oyun">OYUN</Link></li>
                    </ul>

                    <div className='news-footer'>
                        <div>
                            <h3>HABERLER</h3>
                            <img width={100} height={15} src={linePink} alt="linePink" />
                        </div>
                        
                        <Link to="#">
                            <div className='news-box'>
                                <img src={dinazor} width={100} height={80} alt="dinazor" />
                                <h3>Yeni Keşif: Dinozorların Gizemli Dönemi! <br /> 17 Mart, 2023</h3>
                            </div>
                        </Link> 
                      

                        <Link to="#">
                            <div className='news-box'>
                                <img src={astronot} width={100} height={80} alt="astronot" />
                                <h3>Astronot Olmak İster misin? <br /> 9 Nisan, 2023</h3>
                            </div>
                        </Link> 
                       

                        <Link to="#">
                            <div className='news-box'>
                                <img src={YapayZeka} width={100} height={80} alt="yapayZeka" />
                                <h3>Yapay Zeka Dünyası: Artık Daha Akıllı! <br /> 9 Mayıs, 2023 </h3>
                            </div> 
                        </Link> 
                        
                       
                    </div>

                    <img className='footerimg' src={footerMix} width={250} alt="footerMix" />
                   
                </div>
            </div>
                    <hr />
                    <div className='c-text'>
                        <p>© 2024 Çocuk Eğitim ve Oyun Sayfası. Tüm hakları saklıdır.</p>
                    </div>
                    
        </footer>
        </div>
        </>
    )
}