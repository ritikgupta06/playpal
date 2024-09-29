// src/pages/profile.js
import React from 'react';
import styles from '@/styles/profile.module.css'; // Update the path as necessary
import NavBar from '@/components/navbar';

export default function Profile() {
  return (
    <>
    <div className={styles.container}>
    <NavBar/></div>
    <div className={styles.mybox}>
        
    <div>


      <label htmlFor="slider"></label>

      <div className={styles.wrapper}>
        <div className={styles.topIcons}>
          <i className="fas fa-long-arrow-alt-left"></i>
          <i className="fas fa-ellipsis-v"></i>
          <i className="far fa-heart"></i>
        </div>

        <div className={styles.profile}>
          <img
            src="https://avatars.githubusercontent.com/u/142598621?v=4"
            className={styles.thumbnail}
            alt="Profile Thumbnail"
          />
          <div className={styles.check}><i className="fas fa-check"></i></div>
          <h3 className={styles.name}>Beverly Little</h3>
          <p className={styles.title}>Javascript Developer</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!
          </p>
          <button type="button" className={styles.btn}>Follow</button>
        </div>

        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <a href="/"><i className="fab fa-dribbble"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div className={styles.icon}>
            <a href="#"><i className="fab fa-behance"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div className={styles.icon}>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>

   
    </div>
    </div>
    </>
  );
}
