import React from 'react';
import styles from '@/styles/profile.module.css'; // Update the path as necessary
import NavBar from '@/components/navbar';
import Image from 'next/image'; // Import Image component from next/image
import Link from 'next/link';   // Import Link component from next/link

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
      </div>

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
              <Image
                src="https://avatars.githubusercontent.com/u/142598621?v=4"
                className={styles.thumbnail}
                alt="Profile Thumbnail"
                width={150}  // Set appropriate width
                height={150} // Set appropriate height
              />
              <div className={styles.check}><i className="fas fa-check"></i></div>
              <h3 className={styles.name}>Ritik Gupta</h3>
              <p className={styles.title}>Full Stack Developer</p>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!
              </p>
              <div>
                <button
                  type="button" className={styles.btn}
                  onClick={() => window.open('https://www.instagram.com/ritik_g_u_p_t_a_/', '_blank')}
                >
                  Follow
                </button>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <div className={styles.icon}>
                <Link href="/"><i className="fab fa-dribbble"></i></Link>  {/* Use Link here */}
                <h4>12.8k</h4>
                <p>Followers</p>
              </div>

              <div className={styles.icon}>
                <Link href="#"><i className="fab fa-behance"></i></Link>  {/* Use Link here */}
                <h4>12.8k</h4>
                <p>Followers</p>
              </div>

              <div className={styles.icon}>
                <Link href="#"><i className="fab fa-twitter"></i></Link>  {/* Use Link here */}
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
