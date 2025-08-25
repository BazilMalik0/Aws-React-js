import React from "react";
import styles from "./Admin.module.css";

function Admin() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>HOTASH</div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navItem}>
                📊 <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                🔑 <span>Authentication</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                👥 <span>Users</span>
                <span className={styles.badgeHot}>HOT</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                📦 <span>Products</span>
                <span className={styles.badgeNew}>NEW</span>
              </a>
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
