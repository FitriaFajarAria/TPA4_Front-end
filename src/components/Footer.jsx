import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <a href="https://www.instagram.com/shine_erain/"><FaInstagram /></a>
            <a href="https://twitter.com/Sunflwr_sunset"><FaTwitter /></a>
            <a href="https://github.com/FitriaFajarAria"><FaGithub /></a>
            <a href="https://api.whatsapp.com/send?phone=6285156797718"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/fitria-fajar-arianingsih-662312255/"><FaLinkedin /></a>
        </div>
          <p> &copy; 2022 Fitria Fajar Arianingsih</p>
    </div>
  )
}

export default Footer