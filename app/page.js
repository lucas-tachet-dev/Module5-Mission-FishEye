import styles from "./page.module.css"
import ThumbPhotographer from "../components/ThumbPhotographer/ThumbPhotographer";
import { getAllPhotographers } from "./lib/prisma-db"


export default async function Home() {
    const photographers = await getAllPhotographers();

    return(
        <section className={styles.photographersSection}>
            <ul className={styles.photographersGrid}>
                {photographers.map((photographer) => (
                    <ThumbPhotographer 
                        key={photographer.id}
                        id={photographer.id}
                        portrait={photographer.portrait}
                        name={photographer.name}
                        city={photographer.city}
                        country={photographer.country}
                        tagline={photographer.tagline}
                        price={photographer.price}
                    />
                ))}
            </ul>
        </section>
    )
}