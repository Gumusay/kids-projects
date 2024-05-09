import { useRef, useState } from "react";
import quizData from '../json/quizGame.json';
import '../css/QuizGames.css';


export default function QuizGames() {
    let shuffleArray = (array) => {    
        return array.sort(() => Math.random() - 0.5);
        // array sıralamasını rastgele olacak şekilde yapıyor , yani arrayı karıştırıyor
    };
    //dataNew değişkenine karıştırılmış hali attık
    let dataNew = shuffleArray(quizData); 

    let [index, setIndex] =useState(0); //kullanıcının şuanda hangi soruyu görüntülediğini tutar.//data da soru dizinlerine karşılık gelir. bu sayede hangi soruda olduğu takip edilir.
    let[question,setQuestion] = useState(dataNew[index]); //quizData json index değerine göre durum ayarlanır. anlık soru takipi için denilebilir
    let[lock,setLock] = useState(false); //bir soruya birden fazla kez cevap vermemesi için. Eğer tru olursa cevap kilitlenmiş olacak
    let [score,setScore] = useState(0); //doğru cevapladığı sayısı tutar
    let [result,setResult] = useState(false); //quizin tamamlanıp tamamlanmadığını kontro eder

    // Math.floor(math.random() * (data.length + 0)) 1 den data lenght kadar rastgele bir sayı oluşturur
    //her seçeneği temsil eder ve 
   
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];


    const checkAns = (e,ans) => {  //kullanıcının seçtiği cevabı kontrol et
        if(lock === false) {
            if(question.ans === ans) {  /// cevap doğru ise
                e.target.classList.add('correct');
                setLock(true); //cevapları kitle
                setScore(prev => prev+1);  //skoru bir arttır
            }
            else{  //eğer yanlış ise 
                e.target.classList.add('wrong');
                setLock(true); //cevabı kitle
                option_array[question.ans-1].current.classList.add('correct'); //doğru cevabı göster
            }
        }
      
    }

    const next = () => {  //kullanıcının bir sonraki soruya geçmesini sağlar
        if (lock === true) {
            if (index === quizData.length -1) {  /// tüm sorular cevaplanmış mı kontrol ediyor.
                setResult(true);
                return 0;
            } 
            setIndex(++index);  //eğer sorular bitmediyse bir sonraki soruya geçmesi için bir arttırıyorum
            setQuestion(quizData[index]);  //kullanıcıya yeni soruyu göster
            setLock(false); //kilit açılır

            ///bir sonraki soruya geçildiğinde ve quiz sıfırlandığında öncekii cevap ve işaretlerin temizlenmesini sağlar
            option_array.map((option) => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
                return null;
            });
        }
    };

    const reset = () => {  //quiz sıfırlamak için
        setIndex(0);
        setQuestion(quizData[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return(
        <>
            <div className="quizContainer">
                <h1>QUIZ APP</h1>
                <hr />
                {result?<></>:<>
                <h2>{index+1}.{question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e) =>{checkAns(e,1)}}>{question.option1}</li>
                    <li ref={Option2} onClick={(e) =>{checkAns(e,2)}}>{question.option2}</li>
                    <li ref={Option3} onClick={(e) =>{checkAns(e,3)}}>{question.option3}</li>
                    <li ref={Option4} onClick={(e) =>{checkAns(e,4)}}>{question.option4}</li>
                </ul>
                <button onClick={next}>NEXT</button>
                <div className="index">{index+1} of {quizData.length} question</div>
                </>}
                {result?<>
                    <h2>You Scored {score} out of {quizData.length}</h2>
                    <button onClick={reset}>reset</button>
                </>:<></>}
                
            </div>
        </>
    )
}