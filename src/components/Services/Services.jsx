import React from 'react';
import styles from "./Services.module.css";
// ตรวจสอบ path ของรูปภาพอีกครั้งให้แน่ใจว่าถูกต้องตามโครงสร้างโฟลเดอร์ของคุณ
// ถ้า assets อยู่ใน src/ ให้ใช้ '../../assets/1.png'
// ถ้า assets อยู่ใน public/ ให้ใช้ '/assets/1.png' และไม่ต้อง import ตรงนี้
import profileImg1 from '../../assets/1.png'; // ตรวจสอบ path จริงในโปรเจกต์ของคุณ
import profileImg2 from '../../assets/2.png'; // ตรวจสอบ path จริงในโปรเจกต์ของคุณ
import profileImg3 from '../../assets/3.png'; // ตรวจสอบ path จริงในโปรเจกต์ของคุณ
import profileImg4 from '../../assets/4.png'; // ตรวจสอบ path จริงในโปรเจกต์ของคุณ

const certificates = [
  {
    title: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    image: profileImg2,
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    image: profileImg1,
  },
  {
    title: 'Prompt Engineering with GitHub Copilot ',
    issuer: 'Thaimook',
    image: profileImg3,
  },
  {
    title: 'Data Science',
    issuer: 'Thaimook',
    image: profileImg4,
  },
];

function Certificate() {
  return (
    <section className={styles.certificate_section} id="certificate">
      <h2 className={styles.section_title}>MY Certificates</h2>
      <div className={styles.certificate_grid}>
        {certificates.map((cert, index) => (
          <div className={styles.certificate_card} key={index}>
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className={styles.certificate_img}
            />
            <h3 className={styles.certificate_title}>{cert.title}</h3> {/* เพิ่ม className สำหรับ title */}
            <p className={styles.certificate_issuer}>{cert.issuer}</p> {/* เปลี่ยน className เป็น certificate_issuer */}
            {/* <p className={styles.date}>{cert.date}</p> // ถ้าไม่มี date ในข้อมูล ให้ลบบรรทัดนี้ */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;