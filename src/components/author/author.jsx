import './author.css';
import AuthorImage from '/images/image-avatar.png';

export default function Author(){
    return (
        <div className="author-div">
            <div className="author-child">
                <img src={AuthorImage} alt="author" id='author-image'/>
                <h1 id='author-name'>Creation of <span>Jules Wyvern</span></h1>
            </div>
        </div>
    )
}