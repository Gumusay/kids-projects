
import '../css/BlogDetail.css'
import { useParams } from 'react-router-dom';
import BlogData from '../json/blogs.json';
import blogDetailLine from '../../public/blog/detail-line.png';
import balondetay from '../../public/blog/balondetay.png';
export default function BlogDetail() {
    const { id } = useParams();
    const blogId = parseInt(id); 

    const blogdata = BlogData.find(blog => blog.id === blogId);
    ///n bir alt satıra geçirmesi için yazılan fonksiyon
    const renderDescription = () => {
        // Her bir satırı bir <p> elementi içinde döndür
        return blogdata.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    }
    return(
        
        <>
        
            <div className="blogDetailContainer">
                <div className="blogDetailImg">
                    <h2>{blogdata.title}</h2>
                    <img className='blDetailimg' src = {blogdata.image} alt="blogImage" />   
                    <img className='blogLine' src={blogDetailLine} alt="line" />
                </div>
                <img className='balondetayblog' src={balondetay} alt="line" />

                <div className="blogDetailText">
                    <p> {renderDescription()}</p>
                </div>
                
            </div>
        </>
    )
}