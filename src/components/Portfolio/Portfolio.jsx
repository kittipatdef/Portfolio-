
import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <div className={styles.port_items}>
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431588267_1224413818945298_4792673640251789227_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFuiNia5_U03c9EHiJ0o85dzshv2esfD23OyG_Z6x8PbbyEQluzRo91uUbECerJpfW2Zq2rT49FTuZYfL3rp6w_&_nc_ohc=-mRRf9GoRVsAX8vatEC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTwdX_ZIKZSHZlgu6VO2eWoM48cM9N1PcH9Tkb3oSliJA&oe=661343CA" alt="" />
              <p>Application design</p>
          </div>
        </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/428219182_382477304644533_343580598797267252_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEzF5NmwtiwVZ7EqvnkOMmcH_cV-LmDKLgf9xX4uYMouATnZ3D2HvuiCKVpZdKIyqqdqDU8paS6liyhyh6htApM&_nc_ohc=K5wp7Umetk4AX93ubvk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQW2hjy6VeWk2I90_9FfjYyez_vYlX_39g6WPDcS9xYvg&oe=66135C6C" alt="" />
            <p>Binary game</p>
        </div>
        </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/410020218_757160939785493_3004726484390523742_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFdDRAn8aE2lqUw2qA7DtUNX2wjtbld3MxfbCO1uV3czL413DBHOjDY3ZLj3xS0Wgl-uFl_8PNgDZcDiV0cXjDF&_nc_ohc=_MjDvkwrwEIAX-1i9eh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQXwOGY6gzr0Bd-1gA5DefNAgkUtQ1P1w7Gaolxi1NwhA&oe=66133913" alt="" />
            <p>Cer Web Design</p>
        </div>
      </Tilt>
      </div>
    </div>
  )
}

export default Portfolio