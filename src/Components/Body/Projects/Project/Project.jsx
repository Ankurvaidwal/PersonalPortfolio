import { useState, useEffect, useContext } from "react";
import { ProjectContext } from '../Projects'
import "./Project.css"
import { GithubFilled } from '@ant-design/icons'
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

const Project = () => {
    AOS.init();
    AOS.refresh();
    let screenWidth = useWindowSize();
    let count = 0;
    const { title, desc, tags, link, img, dir } = useContext(ProjectContext);
    return (
        <div className="project" data-aos={dir === true ? "zoom-in-right" : "zoom-in-left"} data-aos-delay="150">
            <div className="project-card" style={screenWidth <= 1000 ? { flexDirection: 'column' } : dir === true ? { flexDirection: 'row-reverse' } : { flexDirection: "row" }}>
                <div className="project-card-left" style={dir === true ? { textAlign: "end" } : { textAlign: "start" }}>
                    <img className="project-img" src={img} alt="" />
                </div>

                <div className="project-card-right" >
                    <h1 className="project-title">{title} <span className="underline"></span></h1>
                    <p className="project-desc">{desc} </p>
                    <div className="project-tags">
                        {tags.map((tag) => (
                            <div key={count++}>
                                <p>{`#${tag}`}</p>
                            </div>

                        ))}
                    </div>
                    <a className="project-source" href={link} target="_blank" rel="noreferrer">
                        <GithubFilled />
                        <h4>Source</h4>
                    </a>

                </div>

            </div>
        </div>
    )
}
export default Project
