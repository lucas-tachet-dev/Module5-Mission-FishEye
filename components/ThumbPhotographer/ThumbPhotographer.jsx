import styles from "./ThumbPhotographer.module.css"
import Image from "next/image"

export default function ThumbPhotographer({ id, portrait, name, city, country, tagline, price }) {
    return (
        <li className={styles.thumbPhotographer}>
            <Image 
                src={`/${portrait}`}
                alt={`Portrait du photographe ${name}`}
                width={500}
                height={500}
                className={styles.portrait}
                />
            <h2>{name}</h2>
            <h3>{city}, {country}</h3>
            <h4>{tagline}</h4>
            <p>{price} €/jour</p>
        </li>
    )
}