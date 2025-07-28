import React from "react";
import styles from "./NavBar.module.css";

function Navbar() {
  const handleClick = (event, targetId) => {
    event.preventDefault(); // ป้องกันการกระโดดของหน้าเว็บแบบปกติ

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // เลื่อนไปหา Element นั้นอย่างนุ่มนวล
      targetElement.scrollIntoView({
        behavior: "smooth", // ทำให้การเลื่อนนุ่มนวล
        block: "start",     // เลื่อนให้ส่วนบนของ Element อยู่ที่ด้านบนของ viewport
      });

      // ถ้ามี Header แบบ Fixed และอยากให้เลื่อนไปต่ำกว่า Header ลงมาหน่อย
      // const headerOffset = 60; // ขนาดความสูงของ Header ของคุณ
      // const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      // window.scrollTo({
      //   top: elementPosition - headerOffset,
      //   behavior: "smooth"
      // });
    }
  };

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            {/* เปลี่ยนเป็น onClick */}
            <a onClick={(e) => handleClick(e, "Portfolio")}>Portfolio</a>
          </div>

          <div className={styles.button}>
            <ul>
              {/* เปลี่ยน href เป็น onClick */}
              <li><a onClick={(e) => handleClick(e, "Home")}>Home</a></li>
              <li><a onClick={(e) => handleClick(e, "Skills")}>Skills</a></li>
              <li><a onClick={(e) => handleClick(e, "certificate")}>Certificate</a></li> {/* ID ใน Certificate component คือ "certificate" (ตัวเล็ก) */}
              <li><a onClick={(e) => handleClick(e, "Contact")}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;