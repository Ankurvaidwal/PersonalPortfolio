import { useState } from 'react'
import './Skills.css'
import ProgressBar from '../Auxillary/ProgressBar/ProgressBar'
const Skills = () => {
    const [active, setactive] = useState("web");
    return (
        <div className="skills" id="skills" data-aos="fade-up">
            <h1 className="skills-heading">Skills  <span className="underline"></span></h1>
            <div className="active-skill">
                <button className={active === "web" ? "skill-btn active" : "skill-btn"} onClick={() => { setactive("web") }}>Web</button>
                <button className={active === "others" ? "skill-btn active" : "skill-btn"} onClick={() => { setactive("others") }}>Technology</button>
            </div>
            {active === "web" &&
                <div className="skill-card">
                    <div className="skill-col-left">

                        <ProgressBar name={"Html"} progresspercent={70} />
                        <ProgressBar name={"Css"} progresspercent={60} />
                        <ProgressBar name={"JavaScript"} progresspercent={65} />

                    </div>
                    <div className="skill-col-right">

                        <ProgressBar name={"Nodejs"} progresspercent={50} />
                        <ProgressBar name={"Express"} progresspercent={60} />
                        <ProgressBar name={"Reactjs"} progresspercent={50} />

                    </div>
                </div>
            }
            {active === "others" &&
                <div className="skill-card">
                    <div className="skill-col-left">

                        <ProgressBar name={"Figma"} progresspercent={40} />
                        <ProgressBar name={"Bootstrap"} progresspercent={50} />
                        <ProgressBar name={"MongoDB"} progresspercent={50} />

                    </div>
                    <div className="skill-col-right">
                        <ProgressBar name={"FireBase"} progresspercent={50} />
                    </div>
                </div>
            }

        </div>
    )
}

export default Skills;
