import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Chloe's Github"} description={"Let's see some more stuff about my project 2..."}/>
      <Link className="button" href="https://github.com/ChloeXiao0409">My Github is here!</Link>
      <Link className="button" href="/">Go Back</Link>
      <p>I have some text here</p>
      <Image width={100*2} height={100*2} src="/fox.jpg" alt="Project 2" />
      <p>I have an image above that you can see.</p>
    </main>
  );
}
