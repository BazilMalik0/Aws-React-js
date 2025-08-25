import React, { useState, useEffect, useRef } from "react";
import styles from "./Admin.module.css";

function Admin() {
  const [UsermenuOpen, setUsersMenuOpen] = useState(false);
  const [SettingMenuOpen, setSettingMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleUsersMenu = () => {
    setUsersMenuOpen(!UsermenuOpen);
    setSettingMenuOpen(false);
  };

  const toggleSettingMenu = () => {
    setSettingMenuOpen(!SettingMenuOpen);
    setUsersMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setUsersMenuOpen(false);
        setSettingMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Adfar SoFi</div>
        <nav>
          <ul ref={sidebarRef} className={styles.navList}>
            <li>
              <a href="#" className={styles.navItem}>
                📊 <span>Dashboard</span>
              </a>
            </li>
            <li className={styles.dropdownWrapper}>
              <button className={styles.navItemBtn} onClick={toggleUsersMenu}>
                👥 <span>Users</span>
              </button>
              {UsermenuOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Create User
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Update User
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Delete User
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.dropdownWrapper}>
              <button className={styles.navItemBtn} onClick={toggleSettingMenu}>
                📦 <span>Settings</span>
              </button>
              {SettingMenuOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Create Setting
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Update Setting
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropdownItem}>
                      Delete Setting
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <input
            type="text"
            placeholder="Quick finding..."
            className={styles.search}
          />
          <div className={styles.headerRight}>
            <button className={styles.notification}>
              🔔<span className={styles.notificationBadge}>9</span>
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className={styles.profile}
            />
          </div>
        </header>
      </main>
    </div>
  );
}

export default Admin;
