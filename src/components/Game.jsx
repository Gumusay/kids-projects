import { Link } from 'react-router-dom';
import KelimeOyunu from '../assets/image/home/kelimeOyunu.png';
import quizAppImg from '../assets/image/home/quiz.png';
import memory from '../assets/image/home/memory.png';
import gameTitle from '../assets/image/game/gametitle.png';
import '../css/Game.css';
export default function Game() {
    return(
        <>
            <div className="containerGame">
                <div className="gameImg">
                    <img src={gameTitle} alt="gametitleimg" />
                </div>
                <div className="gameCard">
                    <div className="Gcards">
                        <Link to={'/'}><img src={KelimeOyunu} alt="kelimeoyunu" /><h3>KELİME OYUNU</h3></Link>
                    </div>
                    <div className="Gcards" >  
                        <Link to={'/oyun/quiz'}><img src={quizAppImg} alt="quizapp" /><h3>QUİZ UYGULAMASI</h3></Link>
                    </div>
                    <div className="Gcards">
                        <Link to={'/oyun/memory'}><img src={memory} alt="hafızaoyunu" /><h3>HAFIZA OYUNU</h3></Link>
                    </div>
                </div>
            </div>
        </>
    )
}