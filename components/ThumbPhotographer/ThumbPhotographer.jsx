import styles from "./ThumbPhotographer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function ThumbPhotographer({ id, portrait, name, city, country, tagline, price }) {
    return (
        <Link href={`/photographer-page/${id}`}
            className={styles.link}>
            <li className={styles.thumbPhotographer}>
                <Image 
                    src={`/${portrait}`}
                    alt={`Portrait du photographe ${name}`}
                    width={500}
                    height={500}
                    className={styles.portrait}
                    loading="eager"
                    />
                <h2>{name}</h2>
                <h3>{city}, {country}</h3>
                <h4>{tagline}</h4>
                <p>{price} €/jour</p>
            </li>
        </Link>
    )
}