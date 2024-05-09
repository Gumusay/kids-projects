import '../css/LoginSignup.css';
import loginImg from '../assets/image/login-signup/login.svg';
import signupImg from '../assets/image/login-signup/signup.svg';
import { useState } from 'react';
import Swal from 'sweetalert2';
import md5 from 'md5';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aylyqhrilvxkncgynitq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5bHlxaHJpbHZ4a25jZ3luaXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMDU0MTQsImV4cCI6MjAyNzU4MTQxNH0.Nu17klX_UIuh-d5u_AW1Yb8yCfyROSZJDcYP2MWSdMQ'
const supabase = createClient(supabaseUrl, supabaseKey)


export default function LoginSignup(){
    const [isSignUpMode, setSignUpMode] = useState('');

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpMail, setSignUpMail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSignInClick = (event) => {
        event.preventDefault(); 
        setSignUpMode(''); 
    };

    const handleSignUpClick = (event) => {
        event.preventDefault(); 
        setSignUpMode('sign-up-mode'); 
    };

    const handleSignInMobileClick = (event) => {
        event.preventDefault(); 
        setSignUpMode(''); 
    }

    const handleSignUpMobileClick = (event) => {
        event.preventDefault(); 
        setSignUpMode('sign-up-mode2'); 
    }

    //Kayıt ol
    const register = async () => {

        const { data, error } = await supabase
        .from('users')
        .insert([
            { username : signUpUsername, email : signUpMail, password : md5(signUpPassword)},
        ])
        .select()

        if (error && error.code === '23505'){
            Swal.fire({
                title: 'Hatalı çünkü kayıt mevcut!',
                text: error.details,
                icon: 'error',
                confirmButtonText: 'Tamam'
            })
        } else if (error) {
            Swal.fire({
                title: 'Hatalı!',
                text: error.details,
                icon: 'error',
                confirmButtonText: 'Tamam'
            })
        }
        else{
            localStorage.setItem('user', JSON.stringify(data));
            Swal.fire({
                title: 'Başarılı!',
                text: 'Başarılı bir şekilde kayıt oldunuz.',
                icon: 'success',
                confirmButtonText: 'Tamam'
            }).then (okay => {
                if(okay)
                    window.location.reload();
            });
            
        }
    
    }

    //GİRİŞ

    const login = async () => {
        // console.log('logine tıklandı');
        let { data, error } = await supabase
        .from('users')
        .select("*")
        .eq('username', loginUsername) 
        .eq('password', md5(loginPassword));

        if(error) {
            Swal.fire({
                title: 'Hata!',
                text: error.details,
                icon: 'error',
                confirmButtonText: 'Tamam'
            })
        }
        else if(data.length === 0){  ///dizi olduğu için length ile kontrol ettim
            Swal.fire({
                title: 'Hata!',
                text: 'Hatalı Kullanıcı Girdiniz!',
                icon: 'error',
                confirmButtonText: 'Tamam'
            })
        }
        
        else{
         localStorage.setItem('user', JSON.stringify(data));

            Swal.fire({
                title: 'Başarılı!',
                text: 'Başarılı bir şekilde giriş yaptınız',
                icon: 'success',
                confirmButtonText: 'Tamam'
            }).then (okay => {
                if(okay)
                    window.location.reload();
            });
        }
    }



          

    return(
        <>
          <div className={`container ${isSignUpMode}`}>
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">GİRİŞ YAP</h2>
                        <div className="input-field">
                        <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <input
                                onChange={(e) => 
                                setLoginUsername(e.target.value)}
                             type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                        <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            <input
                                onChange={(e) => 
                                setLoginPassword(e.target.value)}
                             type="password" placeholder="Password"/>
                        </div>
                        <input 
                        onClick={login}
                         type="button" value="GİRİŞ YAP" className="btn"/>
                        <p className="social-text">Ya da Sosyal Platform ile Giriş Yap</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                            </a>
                        </div>
                        <p className="account-text">Hesabınız yok mu? <a href="#" id="sign-up-btn2" onClick={handleSignUpMobileClick}>KAYIT OL</a></p>
                    </form>
                    <form action="" className="sign-up-form">
                        <h2 className="title">KAYIT OL</h2>
                        <div className="input-field">
                        <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <input 
                            onChange={(e) => setSignUpUsername(e.target.value)}
                            type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                        <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <input
                            onChange={(e) => setSignUpMail(e.target.value)}
                             type="text" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                        <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            <input
                            onChange={(e) => setSignUpPassword(e.target.value)}
                             type="password" placeholder="Password"/>
                        </div>
                        <input
                        onClick={register}
                         type="button" value="KAYIT OL" className="btn"/>
                        <p className="social-text">Ya da Sosyal Platform ile Kayıt Ol</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            </a>
                            <a href="" className="social-icon">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                            </a>
                        </div>
                        <p className="account-text">Zaten bir hesabınız var mı? <a href="#" id="sign-in-btn2" onClick={handleSignInMobileClick}>GİRİŞ YAP</a></p>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>HESAP OLUŞTUR</h3>
                            <p>Yeni bir hesap oluşturmak bilgileri doldurun. Zaten bir hesabınız varsa, Giriş Yap butonuna tıklayarak giriş yapabilirsiniz.</p>
                            <button className="btn" id="sign-in-btn" onClick={handleSignInClick}>GİRİŞ YAP</button>
                        </div>
                        <img src={loginImg} alt="login" className="image"/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>HOŞ GELDİNİZ !</h3>
                            <p>Lütfen hesabınıza giriş yapmak için bilgilerinizi girin. Eğer hesabınız yoksa, hemen kayıt Ol butonuna tıklayarak yeni bir hesap oluşturabilirsiniz.</p>
                            <button className="btn" id="sign-up-btn" onClick={handleSignUpClick}>KAYIT OL</button>
                        </div>
                        <img src={signupImg} alt="signin" className="image"/>
                    </div>
                </div>
            </div>
        </>
    )
}

