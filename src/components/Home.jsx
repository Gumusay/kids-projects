import '../css/Home.css';
import homeimg from '../assets/image/home/home-1.png';
import inter from '../assets/image/home/interaktif.svg';
import mobil from '../assets/image/home/mobil-uyum.svg';
import child from '../assets/image/home/child.svg';
import makaleHomeImg from '../assets/image/home/makale.png';
import KelimeOyunu from '../assets/image/home/kelimeOyunu.png';
import quizAppImg from '../assets/image/home/quiz.png';
import memory from '../assets/image/home/memory.png';
import yumurta from '../assets/image/home/deneyYumurta.png';
import murekkep from '../assets/image/home/murekkepDeney.png';
import mikrop from '../assets/image/home/mikrop.png';
import su from '../assets/image/home/suSızma.png';
import kagit from '../assets/image/home/kagit.png';
import kalem from '../assets/image/home/kalemDeney.png';
import blogHome from '../assets/image/home/blog.png';
import homend from '../assets/image/home/homeEnd.png';

import uzayBitki from '../assets/image/haber/uzayBitki.jpg';
import fare from '../assets/image/haber/fare.jpg';
import mont from '../assets/image/haber/mont-saint.jpg';
import paris from '../assets/image/haber/paris.jpg';
import tırMuze from '../assets/image/haber/tırMobil.jpg';
import leonardo from '../assets/image/haber/leonardo.jpg';
import { Link } from 'react-router-dom';



export default function Home() {
    return(
    <>    
        <div className="homeContainer">
           <div className="homeInfKayıt">
                <div className='homeLeft'>
                    <h1>Meraklı öğrenme yolculuğuna çıkan çocuklar!</h1>
                    <span>Çocuklar için özel olarak tasarlanmış öğrenme programlarımızla, evde eğlenceli bir öğrenme ortamı oluşturmanıza yardımcı oluyoruz. <br />Keşfetmenin ve öğrenmenin büyülü dünyasına adım atın...</span>
                    <Link to="/kayit" className='btn-home'>KAYIT OL</Link>
                    <div className='IconHomeLeft'>
                        <div className='IconHomeItems'>
                            <img width={38} height={38} src={inter} alt="interaktif" />
                            <p>İnteraktif <br /> İçerik</p>
                        </div>
                        <div className='IconHomeItems'>
                            <img width={32} height={32} src={mobil} alt="mobilUyum" />
                            <p>Mobil <br /> Uyumlu</p>
                        </div>
                       <div className='IconHomeItems'>
                            <img width={32} height={32} src={child} alt="child" />
                            <p>Çocuk <br /> Uyumlu</p>
                       </div>    
                    </div>
                </div>

                <div className='HomePageImg'>
                    <img src={homeimg} alt="homeImg" />
                </div>
           </div>

           
            
            <div className="homeInfWrapper">  
                <div class="custom-shape-divider-top-1711381024">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='homeInf'>
                    <h2>SMART KİDS İle Öğrenmek Bir Macera</h2>
                    <p>Sitemizde, matematikten bilime, sanattan tarihe kadar her konuda  bolca içerik bulacaksınız. Eğitim oyunları, interaktif aktiviteler ve ilginç  videolarla dolu olan platformumuzda, öğrenmek sadece bir tık ötenizde!</p> 
                </div>
            </div>
          
          

           <div className="gameHome">
            <h2>Eğlenceli Öğrenme Dünyası!</h2>
            <p>Burada, zeka gelişiminize katkı sağlayacak çeşitli eğitici oyunlar ve etkileşimli aktiviteler bulacaksınız. Kelime oyunları ile dil becerilerinizi geliştirirken, quiz oyunları ile genel kültürünüzü test edebilirsiniz. Ayrıca, hafıza oyunları ile görsel hafızanızı güçlendirecek ve öğrenmeyi daha eğlenceli hale getireceksiniz.</p>
            <div className='gameFullInf'>
                <div className='gameHomeItem'>
                    <img width={300} src={KelimeOyunu} alt="kelimeOyunu" />
                    <h3>Kelime Oyunu</h3>
                    <p>Bu oyun, kelime dağarcığınızı genişletmek için harika bir fırsat.</p>
                </div>

                <div className='gameHomeItem'>
                    <img width={300} src={quizAppImg} alt="quiz" />
                    <h3>Quiz Uygulaması</h3>
                    <p>Bu eğlenceli quiz oyununda, bilgi dağarcığınızı test edeceğiz.</p>
                </div>

                <div className='gameHomeItem'>
                    <img width={300} src={memory} alt="memory" />
                    <h3>Hafıza Oyunu</h3>
                    <p> Bu oyunda, görsel hafızanızı test edeceğiz. Kartları çevirin ve eşleşen resimleri bulmaya çalışın.</p>
                </div>
                
            </div>
           </div>

           <div className="makaleHome">
                <img width={600} src={makaleHomeImg} alt="makaleımg" />
                <div className='makaletextHome'>
                    <h2>Eğlenceli Makalelerle Bilgi Dolu Bir Dünya!</h2>
                    <p>Burada, farklı konularda yazılmış kısa ve öz makalelerle dünyayı keşfetme fırsatı bulacaksınız. Bilimden sanata, doğadan tarihe kadar geniş bir yelpazede makalelerle karşılaşacaksınız. Her makale, sizi yeni bir bilgiyle tanıştırırken aynı zamanda öğrenmeyi eğlenceli hale getirecek bir yaklaşımla kaleme alınmıştır.</p>
                    <Link className='btn-home-makale' to="/makale">MAKALE</Link>
                </div>
           </div>

           <div className="deneyWrapperHome">
                <div class="custom-shape-divider-top-1711402047">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='deneyHometxt'>
                    <h2>Keşfetmenin Büyülü Dünyası: Eğlenceli Deneyler!</h2>
                    <p>Basit malzemelerle evde kolayca gerçekleştirebileceğiniz ilginç deneylerle tanışacaksınız. </p>
                    <div className='deneyHomeItems'>
                        <img width={65} src={yumurta} alt="yumurta" />
                        <img width={85} src={murekkep} alt="mürekkep" />
                        <img width={85} src={mikrop} alt="mikrop" />
                        <img width={45} src={kalem} alt="kalem" />
                        <img width={85} src={su} alt="su" />
                        <img width={85} src={kagit} alt="kagit" />
                    </div>
                </div>
                
           </div>
           <h2>İLGİNÇ HABERLER</h2>
           <div className="haberHome">
                <div className='haberColumn1'>
                    <Link to="/haber/3">
                        <img width={200} src={uzayBitki} alt="" />
                        <h3>Uzayda Bitki Yetiştirmek: <br /> Geleceğin Tarımı!</h3>
                    </Link>
                </div>
                <div className='haberColumn2'>
                    <div className='homeHaberItem'>
                        <Link to="/haber/6">
                            <img width={200} src={fare} alt="" />
                            <h3>Sevimli Farelerin Kahramanı <br /> Walt Disney</h3>
                        </Link>
                    </div>
                    <div className='homeHaberItem'>
                        <Link to="/haber/8">
                            <img width={200} src={mont} alt="" />
                            <h3>Masal Gibi Bir Ada: <br /> Mont Saint Michel</h3>
                        </Link>
                    </div>
                </div>

                <div className='haberColumn3'>
                    <Link to="/haber/4">
                        <img width={200} src={paris} alt="" />
                        <h3>Paris’in Sanat Müzesi</h3>
                    </Link>
                </div>

                <div className='haberColumn4'>
                    <div className='homeHaberItem'>
                        <Link to="/haber/5">
                            <img width={200} src={tırMuze} alt="" />
                            <h3>Mobil Müze Tırı</h3>
                        </Link>
                    </div>
                    <div className='homeHaberItem'>
                        <Link to="/haber/2">
                            <img width={200} src={leonardo} alt="" />
                            <h3>Da Vinci ile <br /> Hayali Röportaj</h3>
                        </Link>
                    </div>
                </div>
            </div>

           <div className="blogHome">
                <div className='blogtextHome'>
                    <h2>Eğlenceli Bloglarla Bilgi Dolu Bir Serüven!</h2>
                    <p>Burada, çeşitli konularda yazılmış ilgi çekici ve eğlenceli blog yazılarıyla tanışacaksınız. Doğa, hayvanlar, bilim, sanat ve daha pek çok konuda keyifli yazılarla dolu bloglarımız, okurken eğlenirken öğrenmenizi sağlayacak. Her bir blog yazısı, sizi farklı bir dünyaya götürerek hayal gücünüzü besleyecek ve merakınızı artıracak.</p>
                    <Link className='btn-home-blog' to="/blog">BLOG</Link>
                </div>
                <img width={550} src={blogHome} alt="blogHome" />
            </div>
           
        </div>
         <div className='homeEndPage'>
             <img width={300} src={homend} alt="homeend" />
        </div>
        
    </>
    )
}