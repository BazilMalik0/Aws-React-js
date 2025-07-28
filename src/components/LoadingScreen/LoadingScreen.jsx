import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingTime = 3000; // 3 seconds total
    const fadeOutTime = loadingTime - 500; // Start fade-out at 2.5s

    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, fadeOutTime);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, loadingTime);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`${styles.loadingScreen} ${!isVisible ? styles.hidden : ""}`}
    >
      <div className={styles.loadingContent}>
        <div className={styles.loadingLogo}>Aws Infotech</div>
        <div className={styles.loadingSpinner}></div>
        <div className={styles.loadingText}>Loading amazing experiences...</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
