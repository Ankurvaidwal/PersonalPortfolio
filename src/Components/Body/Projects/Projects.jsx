import React from 'react'
import Project from './Project/Project'
import { projectapi } from '../../API/ProjectApi'
import "./Projects.css"


const Projects = () => {
    let flag = true;
    const changedir = () => {
        flag = !flag;
        return flag;
    }
    return (
        <div className="projects" id="projects">
            <h1 className="projects-title">Projects <span className="underline"></span></h1>
            <h2 className="projects-subtitle">
                Here, are few projects where I have used the skills that I have learned so far
            </h2>
            <div className="projects-card">
                {
                    projectapi.map((items) => (
                        <Project key={items.id} title={items.title} desc={items.desc} tags={items.tags} link={items.link} img={items.img}  dir={changedir()}  />
                    ))
                }
            </div>

        </div>
    )
}
export default Projects;
