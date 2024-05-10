import '../css/Blog.css'
import BlogText from '../../public/blog/blog-text.png'
import BlogData from '../json/blogs.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Blog(){
    const [blog, setBlog] = useState(BlogData);

    function filterFunction(year)
    {
        setBlog( BlogData.filter( (e) => e.date.split('-')[0] == year));
        console.log(blog);
    }

    return(
        <>
            <div className="blogContainer">
                <div className='blogImg'>
                    <img src={BlogText} alt="blogText" />
                </div>

                <div className='filter-calendar'>
                    <ul>
                        <li className='filterNav pink'><a onClick={()=> filterFunction(2024)}>2024</a></li>
                        <li className='filterNav blue'><a onClick={()=> filterFunction(2023)}>2023</a></li>
                        <li className='filterNav purple'><a onClick={()=> filterFunction(2022)}>2022</a></li>
                        <li className='filterNav yellow'><a onClick={()=> filterFunction(2021)}>2021</a></li>
                    </ul>
                </div>
              
                <div className='blogBox'>

                    {blog.map((blog) => (
                        <div className='blogItem' key={blog.id}>
                            
                            <Link className='blog-link' to={`/blog/${blog.id}`}>
                            <img width={100} src={blog.image} alt={blog.title} />
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                            <h4>{blog.date}</h4>
                            </Link>
                            <a className='read-more-blog'>OKU<svg height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>

                        </div>   
                    ))}
                    
                </div>
            </div>
        </>
    )
}