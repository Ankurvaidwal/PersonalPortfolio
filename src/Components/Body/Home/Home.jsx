import { useRef, useEffect } from 'react'
import './Home.css'
import { init } from 'ityped';
import AnimatedSvg from '../Auxillary/AnimatedSvg/AnimatedSvg';
const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Developer", "Programmer"],
        });
    }, []);
    return (
        <div className="home" id="home">
            <div className="home-left">
                <div className="left-wrapper">
                    <h4 className="home-tag">Welcome, I am</h4>
                    <h1 className="home-name">Ankur Vaidwal</h1>
                    <h3 className="home-title"><span ref={textRef}></span></h3>
                    <h2 className="home-desc">
                        Let's be Creative and Contribute to the world together
                    </h2>
                    <a href="#about" className="home-btn">More</a>
                </div>
            </div>
            <div className="home-right">
                <AnimatedSvg />
            </div>
        </div>
    )
}

export default Home;