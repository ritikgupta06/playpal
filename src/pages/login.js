import React from 'react';
import styles from '@/styles/login.module.css';
import NavBar from '@/components/navbar';

export default function Login() {
  return (<>
   <div className={styles.container}>
  <NavBar/></div>
    <div className={styles.background}>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <form className={styles.form}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className={styles.social}>
          <div className={styles.google}>
            <i className="fab fa-google"></i> Google
          </div>
          <div className={styles.fb}>
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
    </>
  );
}