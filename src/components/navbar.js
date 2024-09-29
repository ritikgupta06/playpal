import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faSearch, faComments, faUser, faSignOutAlt, faSignInAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router'; 
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const [username, setUsername] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    localStorage.removeItem('username');
    router.push('/logout'); 
  };

  const handleLogoutClose = () => {
    setShowLogoutModal(false);
  };

  const isActive = (path) => router.pathname === path; 

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftMenu}>
          <ul>
            <li className={isActive('/home') ? styles.active : ''}>
              <Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
            </li>
            <li className={isActive('/discussion') ? styles.active : ''}>
              <Link href="/discussion"><FontAwesomeIcon icon={faComments} /> Discussion</Link>
            </li>
            <li className={isActive('/search') ? styles.active : ''}>
              <Link href="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>PlayPal</div>
        <div className={styles.rightMenu}>
          <ul>
            <li className={isActive('/carrer') ? styles.active : ''}>
              <Link href="/carrer"><FontAwesomeIcon icon={faBriefcase} /> Events</Link>
            </li>
            <li className={isActive('/profile') ? styles.active : ''}>
              <Link href="/profile"><FontAwesomeIcon icon={faUser} /> My Profile</Link>
            </li>
            {username ? (
              <li>
                <a onClick={handleLogoutClick}><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</a>
              </li>
            ) : (
              <li className={isActive('/login') ? styles.active : ''}>
                <Link href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Log In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className={styles.footerNav}>
        <ul>
          <li className={isActive('/home') ? styles.active : ''}>
            <Link href="/home"><FontAwesomeIcon icon={faHome} /></Link>
          </li>
          <li className={isActive('/discussion') ? styles.active : ''}>
            <Link href="/discussion"><FontAwesomeIcon icon={faComments} /></Link>
          </li>
          <li className={isActive('/search') ? styles.active : ''}>
            <Link href="/search"><FontAwesomeIcon icon={faSearch} /></Link>
          </li>
          <li className={isActive('/carrer') ? styles.active : ''}>
            <Link href="/carrer"><FontAwesomeIcon icon={faBriefcase} /></Link>
          </li>
          <li className={isActive('/profile') ? styles.active : ''}>
            <Link href="/profile"><FontAwesomeIcon icon={faUser} /></Link>
          </li>
          {username ? (
            <li>
              <a onClick={handleLogoutClick}><FontAwesomeIcon icon={faSignOutAlt} /></a>
            </li>
          ) : (
            <li className={isActive('/login') ? styles.active : ''}>
              <Link href="/login"><FontAwesomeIcon icon={faSignInAlt} /></Link>
            </li>
          )}
        </ul>
      </div>


    </>
  );
};

export default NavBar;
