import styles from "./PhotographMedia.module.css"
import Image from "next/image"

export default function PhotographMedia({ title, image, likes }) {
    return(
        <li className={styles.mediaCard}>
            <Image 
                src={`/${image}`}
                alt={title}
                height={400}
                width={400}
                loading="eager"
                className={styles.mediaPhoto}
            />
            <div className={styles.mediaInfo}>
                <h3>{title}</h3>
                <div className={styles.likeSection}>
                    <p>{likes}</p>
                    <Image 
                        src={`/images/like.png`}
                        alt="likes"
                        width={21}
                        height={24}
                    />
                </div>
            </div>
        </li>
    )
}