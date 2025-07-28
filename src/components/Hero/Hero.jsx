import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaLine, FaInstagram, FaPhone } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { MdLocationOn, MdEmail } from 'react-icons/md';
import profileImgAA from '../../assets/AA.png';

function Hero() {
  return (
    <div className={styles.hero_wrapper} id="Home">
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>สวัสดีครับ ผมชื่อ </p>
            <h3 className={styles.text_2}>นายกิตติพัฐต์ ฉลองชน</h3>
            <p className={styles.text_3}>
              <TypeAnimation
                sequence={["Java Developer", 1000]}
                speed={25}
                repeat={Infinity}
              />
            </p>

            <p className={styles.hero_Hadedescriptio}>
              สวัสดีครับ ชื่อเล่นภูมิ เป็นนักศึกษาจากมหาวิทยาลัยพะเยา คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 4 มีความสนใจในการพัฒนาเว็บไซต์และเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ พัฒนาทักษะด้วยตนเอง และมีพื้นฐานด้าน HTML, CSS และ Machine Learning มีความสนใจในการเรียนรู้ภาษา Java และสามารถทำงานร่วมกับผู้อื่นได้เป็นอย่างดี
            </p>
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_image}>
                <img src={profileImgAA} alt="Profile" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
