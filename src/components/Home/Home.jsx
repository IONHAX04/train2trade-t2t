import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

import './home.css';

import img1 from '../../assets/intro/2.png';
import img2 from '../../assets/intro/1.png';
import img3 from '../../assets/intro/3.png';

export default function Home({ scrollToActivities }) {
    const handleViewCourseClick = () => {
        scrollToActivities();
    };

    return (
        <div className="introPage" id='introPage' data-aos="zoom-in-up" data-aos-delay="0">
            <p className='introText1' style={{ margin: '20px', fontSize: '30px' }}>
                Let's become
                <span style={{ fontWeight: 'bold' }}>
                    <Typewriter
                        words={[' Wealthier !', ' Healthier !', ' Happier !']}
                        loop={0}
                        typeSpeed={120}
                        deleteSpeed={80}
                    />
                </span>
            </p>

            <p className='introText2' style={{ fontSize: '32px' }}>Lets learn & grow together</p>

            <div className="cardActivities">
                <div className="cardintro">
                    <img
                        src={img2}
                        style={{
                            objectFit: 'fill',
                            height: '100%',
                            width: '100%',
                            borderRadius: '14px'
                        }} />
                    <div className="buttons">
                        <button className='btn btn-light shadow-button' onClick={handleViewCourseClick}>View Course</button>
                        <a href="https://wa.me/+917358668298/?text=🙌 *I'm Interested !!* %0A👉Connect with me for the course *PersonalFinance* %0A🤳Feel free to contact me *@7358668298* %0A*LearnAndEarn*" target="_blank">
                            <button className='btn btn-light shadow-button'>Join Now</button>
                        </a>
                    </div>
                </div>
                <div className="cardintro">
                    <img
                        src={img1}
                        style={{
                            objectFit: 'fill',
                            height: '100%',
                            width: '100%',
                            borderRadius: '14px'
                        }} />
                    <div className="buttons">
                        <button className='btn btn-light shadow-button' onClick={handleViewCourseClick}>View Course</button>
                        <a href="https://wa.me/+917358668298/?text=🙌 *I'm Interested !!* %0A👉Connect with me for the course *SwingTrading* %0A🤳Feel free to contact me *@7358668298* %0A*LearnAndEarn*" target="_blank">
                            <button className='btn btn-light shadow-button'>Join Now</button>
                        </a>
                    </div>
                </div>
                <div className="cardintro">
                    <img
                        src={img3}
                        style={{
                            objectFit: 'fill',
                            height: '100%',
                            width: '100%',
                            borderRadius: '14px'
                        }} />
                    <div className="buttons">
                        <button className='btn btn-light shadow-button' onClick={handleViewCourseClick}>View Course</button>
                        <a href="https://wa.me/+917358668298/?text=🙌 *I'm Interested !!* %0A👉Connect with me for the course *Personal_1on1_Mentoring* %0A🤳Feel free to contact me *@7358668298* %0A*LearnAndEarn*" target="_blank">
                            <button className='btn btn-light shadow-button'>Join Now</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contents" data-aos="zoom-in-up" data-aos-delay="50" style={{ width: '100%', margin: '0px', padding: '20px' }}>
                <p style={{ fontSize: '24px' }}><b>Catch my thoughts and interact with me here on </b><span style={{ color: '#FEE304', fontWeight: 'bold' }}>my social media handles</span></p>
                <p style={{ fontSize: '20px', marginTop: '30px' }}>
                    "Engage with me and let's explore the depths of our thoughts together on my <span style={{ color: '#FEE304', fontWeight: 'bold' }}>#social media handles. </span>Your insights are valuable, and I'm here to interact and share ideas with you. Let's foster a space of professionalism and respect where every thought is welcomed and honored. Join the conversation and let's make <span style={{ color: '#FEE304', fontWeight: 'bold' }}>meaningful connections!</span>"
                </p>
                <p style={{ fontSize: '20px' }}>
                    "Discover the breadth of topics we cover and expand your knowledge with us! From cutting-edge technology to timeless philosophy, there's something for everyone. Explore our content and deepen your understanding. Let's embark on a journey of continuous learning together!<span style={{ color: '#FEE304', fontWeight: 'bold' }}> #KnowledgeIsPower #ExploreWithUs</span>"
                </p>
            </div>
        </div>
    )
}
