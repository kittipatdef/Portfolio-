import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuKB0maSlSENZQUjp7sQ8e29Wp5qbL7iNNg&usqp=CAU"
            alt=""
          />
          <h4>Kizaru</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://pbs.twimg.com/profile_images/1333375831901569026/XKMbGWHw_400x400.jpg"
            alt=""
          />
          <h4>Sardaukar</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h4>Pee</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;