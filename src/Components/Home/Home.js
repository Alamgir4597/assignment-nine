

import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import HomeItem from '../HomeItem/HomeItem';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate=useNavigate();
// console.log("review",review)
const threeItem= reviews.slice(0,3)
    return (
        <div className='main-container'>
        <div className='home-container'>
            <div className='text-container'>
                    <h1>Honda CB150R Exmotion (ABS)</h1>
                    <p>The bike used 149 cc engines, which included Single Cylinder, DOHC, Liquid-Cooled, 4-Valve. Its maximum power is 20 HP (Expected) and its fuel method PGM-Fi (Programmed Fuel Injection) Combined with the modern breaking system ABS (anti-lock brake system) technology.</p>
            </div>
            <div className='img-container'>
                    <img src='https://satkhiraservice.com/wp-content/uploads/2020/09/honda-cb-150r-exmotion-img03-600x585.jpg' alt="Logo" />;
                
            </div>
            
        </div>
            
         <h1>Total Reviews: {reviews.length}</h1>
            {threeItem.map(view => <HomeItem key={view.id} view={view}></HomeItem>)}
            <button className='review-btn' onClick={() => navigate('/review')}>See All Reviews</button>
        </div>
    );
};

export default Home;