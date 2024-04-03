import Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading title={"Chloe's Portfolio"}
        description={" I am a student studying Master of Computer Science at The University of Sydney, my major specialization is software engineering... I absolutely love Web Development! I created this website at a GDSC Event, which demonstrates my passion for all things tech."}
      />
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "Portfolio Website",
            description: "This website is a portfolio of my work, and a demonstration of my skills.",
            image: "/react.webp",
            skills: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
            href: "project",
          },
          {
            title: "Project 2",
            description: "Description 2",
            image: "/github-mark.png",
            skills: ["Skill 1", "Skill 2", "Skill 3"],
            href: "project-2",
          },
          {
            title: "Project 3",
            description: "Description 3",
            image: "/selenium.png",
            skills: ["Skill 1", "Skill 2", "Skill 3"],
            href: "project-3",
          },
        ]
      } />
    </main>
  );
}
