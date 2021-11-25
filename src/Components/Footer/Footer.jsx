import React from 'react'
import './Footer.css'

import { PhoneFilled, GithubOutlined, InstagramFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-up">
                <div className="footer-left">
                    <h1 className="footer-heading">Contact Info:</h1>
                    <div className="info">
                        <PhoneFilled className="contact-info" />
                        <h2>9315421566</h2>
                    </div>
                    <div className="info">
                        <MailFilled className="contact-info" />
                        <h2>vaidwal2001@gmail.com</h2>
                    </div>
                </div>
                <div className="footer-right">
                    <h1 className="footer-heading">Socials:</h1>
                    <div className="socials">
                        <a href="https://github.com/Ankurvaidwal" target="_blank"  rel="noreferrer"><GithubOutlined className="socials-links" /></a>
                        <a href="https://www.instagram.com/imm_monty/" target="_blank"  rel="noreferrer"><InstagramFilled className="socials-links" /></a>
                        <a href="https://www.linkedin.com/in/ankur-vaidwal-2a36991a9/" target="_blank"  rel="noreferrer"><LinkedinFilled className="socials-links" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <h1 className="copyright"> &copy;2021-Ankur Vaidwal</h1>
            </div>
        </footer>
    )
}

export default Footer
