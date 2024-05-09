import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './components/Blog.jsx';
import Makale from './components/Makale.jsx';
import Deney from './components/Deney.jsx';
import LoginSignup from './components/LoginSignup.jsx';
import BlogDetail from './components/BlogDetail.jsx';
import Home from './components/Home.jsx';
import Haber from './components/Haber.jsx';
import Game from './components/Game.jsx';
import QuizGames from './components/QuizGames.jsx';
import Layout from './components/Layout.jsx';
import Page404 from './components/Page404.jsx';
import LayoutOut from './components/LayoutOut.jsx';
import MakaleDetail from './components/MakaleDetail.jsx';
import HaberDetail from './components/HaberDetail.jsx';
import MemoryGames from './components/MemoryGames.jsx';

// import {DoubleBubble} from 'react-spinner-animated';
// import 'react-spinner-animated/dist/index.css'




let routes =[];

if(localStorage.getItem('user') === null) ///LOCALSTORAGE ÇEKİLEN NESNEYİ GET EDİYOR YANİ ÇAĞIRIYOR VE USER NESNESİNİ KONTROL EDİYOR NULL İSE 
{

    routes.push({
        element: <LayoutOut />,
        children: [
            {
                path:'/kayit',
                element: <LoginSignup/>
            },
            {
                path:'/giris',
                element: <LoginSignup/>
            },
            {
                path:'/',
                element: <LoginSignup/>
            }
        ]
    })
}
else
{
    routes.push({
        element: <Layout />,
        children: [
              {
                path:'/',
                element: <Home/>
              },
              {
                  path:'/makale',
                  element: <Makale/>
              },
              {
                path: '/makale/:id', 
                element: <MakaleDetail />
              },
              {
                  path:'/blog',
                  element: <Blog/>
              },
              {
                  path: '/blog/:id', 
                  element: <BlogDetail />
              },
              {
                  path:'/deney',
                  element: <Deney/>
              },
              {
                  path:'/haber',
                  element: <Haber/>
              },
              {
                path:'/haber/:id',
                element: <HaberDetail/>
              },
              {
                  path:'/oyun',
                  element: <Game/>
              },
              {
                path:'/oyun/quiz',
                element: <QuizGames/>
              },
              {
                path:'/oyun/memory',
                element: <MemoryGames/>
              }
            
            //   {
            //      path: '*',
            //      element: <Page404/>
            //   }
        ]
    });
}

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/> 
)
