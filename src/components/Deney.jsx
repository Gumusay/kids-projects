import '../css/Deney.css'
import deneyData from '../json/deneys.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import DeneyText from '../../public/deney/deney-txt.png';
import lineDeney from '../../public/deney/line.png'; 
import { useEffect, useState } from 'react';

export default function Deney(){
    const [selectedDeney, setSelectedDeney] = useState(null);

    const handleDeneyClick = (id) => {
        const selected = deneyData.find(deney => deney.id === id);
        setSelectedDeney(selected);
    };

    useEffect(() => {
        handleDeneyClick(1);
    },[]);



    return(
        <>
            <div className="deneyContainer">
                <div className='deneyImg'>
                    <img src={DeneyText} alt="deneyText" />
                </div>
              

                <div className="swiper">
                         <Swiper
                            slidesPerView={1}
                            pagination={{
                            clickable: true,
                            currentClass: "mt-10"
                            }}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            breakpoints= {{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                    slidesPerView: 2
                            },
                            1024: {
                                    slidesPerView: 4
                            }
                            }}
                            modules={[Pagination, Autoplay]}

                        >
                
                        {deneyData.map((deney) => (
                        <div className='deneyItem' key = {deney.id}>
                            <SwiperSlide>
                                <img
                                    width="100%" height={200} src={deney.image} style={{
                                    objectFit: "cover"
                                }} alt="deneyImg" 
                                onClick={() => handleDeneyClick(deney.id)}/>
                                <h3>{deney.title}</h3>
                            </SwiperSlide>
                        </div>
                        ))}
                    </Swiper>
                </div>


                <div className='deneylerContent'>
                    {selectedDeney && (
                            <>  
                                <div className='deneyTitle'>
                                     <h2>{selectedDeney.title}</h2>
                                </div>
                                <div className='deneyParagraf'>
                                    <div className='deneyDes'>
                                        <img className='desImgdeney' width={400} height={300} src={selectedDeney.image} alt="image" />
                                        <p>{selectedDeney.description}</p>
                                        <img className='deneyline' src={lineDeney} alt="lineDeney" />
                                    </div>
                                    

                                    <div className='require'>
                                        <h3>MALZEMELER:</h3>
                                        <ul>
                                            {selectedDeney.requirements.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='role'>
                                        <h3>YAPILACAKLAR:</h3>
                                        <ul>
                                            {selectedDeney.role.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                
                                </div>
                             
                            </>
                    )}
                </div>

               
            </div>

        </>
    )
}

