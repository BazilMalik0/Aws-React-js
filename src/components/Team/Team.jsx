import React from "react";

import styles from "./Team.module.css";
import { teamData } from "../../data";
import TeamCard from "../TeamCard/TeamCard";

function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>
            Meet Our Team <span className={styles.sectionEmoji}>👨‍💻</span>
          </h2>
          <p>The brilliant minds behind our innovative solutions</p>
        </div>
        <div className={styles.teamGrid}>
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              expertise={member.expertise}
              avatar={member.avatar}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
