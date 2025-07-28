import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaCss3 , FaGitAlt, FaNode, FaPython, FaC, FaCableCar, FaJava, FaHtml5, FaGithub, FaFigma} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_container} id="Skills">
        <h3 className={styles.skills_title}>My Skills </h3>
        <ul className={styles.skills_list}>
            <li><FaHtml5/></li>
            <li><FaCss3/></li>
            <li><FaSquareJs/></li>
            <li><FaPython/></li>
            <li><FaJava/></li>
            <li><FaGithub/></li>
        </ul>
    </div>
  )
}

export default Skills