import React from "react";
import styles from "./TeamCard.module.css";

function TeamCard({ name, role, expertise, avatar, social }) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.teamAvatar}>{avatar}</div>
      <h3>{name}</h3>
      <p className={styles.teamPosition}>{role}</p>
      <p>{expertise}</p>
      <div className={styles.teamSocial}>
        {Object.entries(social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
