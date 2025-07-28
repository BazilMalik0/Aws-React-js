import React from "react";
import "./TeamSection.css";
import { appData } from "../../team.js";
const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="section-header">
          <h2>
            Meet Our Team <span className="section-emoji"></span>
          </h2>
          <p>The brilliant minds behind our innovative solutions</p>
        </div>
        <div className="team-grid" id="teamGrid">
          {appData.team.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p class="team-position">{member.role}</p>
              <p>{member.expertise}</p>

              <div className="team-social">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {member.social.dribbble && (
                  <a
                    href={member.social.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
