import { useState, useEffect } from "react";
import './ProgressBar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function useWindowSize() {
    const [size, setsize] = useState([window.innerWidth]);
    useEffect(() => {
        const handlesubmit = () => {
            setsize([window.innerWidth]);
        };
        window.addEventListener("resize", handlesubmit);
        return () => {
            window.removeEventListener("resize", handlesubmit);
        }
    }, [])
    return size;
}

const ProgressBar = ({ name, progresspercent }) => {
    AOS.init();
    AOS.refresh();
    AOS.refreshHard();
    let width = useWindowSize();

    if (width > 900)
        width = 0.34 * width;
    else {
        width = 0.8 * width;
    }

    const progress = (progresspercent / 100) * width;
    return (
        <div className="skill" data-aos="fade-up" data-aos-delay="100">
            <div className="stats">
                <h3 className="skillname">{name}</h3>
                <h3 className="skillname">{progresspercent}%</h3>
            </div>

            <span className="bar"> <span className="skillprogress" style={{ width: `${progress}px` }}></span></span>
        </div >
    )
}

export default ProgressBar;
