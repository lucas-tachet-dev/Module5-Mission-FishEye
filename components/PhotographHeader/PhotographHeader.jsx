import styles from "./PhotographHeader.module.css"
import Image from "next/image";


export default function PhotographHeader({ name, city, country, tagline, portrait }) {
    return(
        <section className={styles.photographHeader}>
            <div className={styles.photographInfo}>
                <h1>{name}</h1>
                <h2>{city}, {country}</h2>
                <p>{tagline}</p>
            </div>
            <button className={styles.contactButton}>Contactez-moi</button>
            <Image
                src={`/${portrait}`}
                alt={`${name}`}
                width={500}
                height={500}
                className={styles.portrait}
                loading="eager"
            />
        </section>
    )
}