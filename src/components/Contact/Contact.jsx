import React from 'react';
import styles from './Contact.module.css';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className={styles.contact_wrapper} id="Contact">
      <h2 className={styles.contact_title}>contact </h2>
      <p className={styles.contact_description}>
      </p>

      <div className={styles.contact_grid}>
        {/* Address Card */}
        <div className={styles.contact_card}>
          <MdLocationOn className={styles.contact_icon} />
          <h4 className={styles.card_title}>Address</h4>
          <p className={styles.card_content}>
            342/2 หมู่14 ต.แม่สิน อ.ศรีสัชนาลัย จ.สุโขทัย 64130
          </p>
        </div>

        {/* Phone Card */}
        <div className={styles.contact_card}>
          <MdPhone className={styles.contact_icon} />
          <h4 className={styles.card_title}>Phone</h4>
          <p className={styles.card_content}>093-263-5150</p>
        </div>

        {/* Email Card */}
        <div className={styles.contact_card}>
          <MdEmail className={styles.contact_icon} />
          <h4 className={styles.card_title}>Email</h4>
          <p className={styles.card_content}>kittipath.poom@gmail.com</p>
        </div>

        {/* Facebook Card */}
        <div className={styles.contact_card}>
          <FaFacebookF className={styles.contact_icon} />
          <h4 className={styles.card_title}>Facebook</h4>
          <p className={styles.card_content}>https://www.facebook.com/poom.kung.353/</p>
        </div>
        <div className={styles.A}>
         
          <h4 className={styles.A}></h4>
          <p className={styles.A}></p>
        </div>
        {/* GitHub Card */}
        {/* ตำแหน่งใน JSX ไม่ต้องเปลี่ยน เพราะ Grid CSS จะจัดวางให้เอง */}
        <div className={styles.contact_card}>
          <FaGithub className={styles.contact_icon} />
          <h4 className={styles.card_title}>GitHub</h4>
          <p className={styles.card_content}>https://github.com/kittipatdef</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;