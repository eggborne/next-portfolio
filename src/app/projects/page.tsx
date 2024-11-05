import styles from './Projects.module.css';
import projectsData from '@/projects.json';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_DEV_NAME}'s projects`,
};
export default function Projects() {

  return (
    <section>
      <div className={styles.projectList}>
        {projectsData.map(data =>
          <ProjectCard key={data.id} {...data} />
        )}
      </div>
    </section>
  );
}
