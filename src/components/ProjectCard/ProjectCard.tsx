import styles from './ProjectCard.module.css';
import { useState } from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: {
    frontEnd: string[];
    backEnd: string[];
    deployment: string[];
  };
  images: {
    icon: string;
    screenshots: {
      desktop: string[];
      mobile: string[];
    }
  };
  liveUrl: string;
  features: string[];
  challenges: string[];
}

export default function ProjectCard({ id, title, description, tech, images, liveUrl, features, challenges }: ProjectCardProps) {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={`${process.env.NEXT_PUBLIC_REPO_ROOT_URL }/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${id}`} target='_blank' rel="noopener noreferrer" className={styles.repoLink}>
          View Repo →
        </a>
        {liveUrl && <a href={liveUrl} target='_blank' rel="noopener noreferrer" className={styles.liveLink}>
          View Live →
        </a>}
      </div>
      <div className={styles.imageWrapper}>
        {images.screenshots.desktop.length > 0 && images.screenshots.desktop.map((fileName, index) => (
          <img key={index} src={`${process.env.NEXT_PUBLIC_MEDIA_ROOT_URL}/${fileName}`} alt={`${title} - Screenshot ${index + 1}`} className={styles.screenshot} />
        ))}
        {images.screenshots.mobile.length > 0 && images.screenshots.mobile.map((fileName, index) => (
          <img key={index} src={`${process.env.NEXT_PUBLIC_MEDIA_ROOT_URL}/${fileName}`} alt={`${title} - Screenshot ${index + 1}`} className={styles.screenshot} />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.techSection}>
          {tech.frontEnd.length > 0 && (
            <div className={styles.techGroup}>
              <span className={styles.techLabel}>Frontend</span>
              <div className={styles.techStack}>
                {tech.frontEnd.map((item, index) => (
                  <span key={index} className={`${styles.techItem} ${styles.frontEnd}`}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {tech.backEnd.length > 0 && (
            <div className={styles.techGroup}>
              <span className={styles.techLabel}>Backend</span>
              <div className={styles.techStack}>
                {tech.backEnd.map((item, index) => (
                  <span key={index} className={`${styles.techItem} ${styles.backEnd}`}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {tech.deployment.length > 0 && (
            <div className={styles.techGroup}>
              <span className={styles.techLabel}>Deployment</span>
              <div className={styles.techStack}>
                {tech.deployment.map((item, index) => (
                  <span key={index} className={`${styles.techItem} ${styles.deployment}`}>{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.details}>
          <div className={styles.detailSection}>
            <h4 className={styles.sectionTitle}>✨ Key Features</h4>
            <div className={styles.features}>
              {features.map((feature, index) => (
                <p key={index} className={styles.feature}>{feature}</p>
              ))}
            </div>
          </div>

          <div className={styles.detailSection}>
            <h4 className={styles.sectionTitle}>💪 Challenges Overcome</h4>
            <div className={styles.challenges}>
              {challenges.map((challenge, index) => (
                <p key={index} className={styles.challenge}>{challenge}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}