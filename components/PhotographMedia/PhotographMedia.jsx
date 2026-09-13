import styles from "./PhotographMedia.module.css"
import Image from "next/image"

export default function PhotographMedia({ title, media, likes }) {

    return(
        <li className={styles.mediaCard}>
            {media.image ? (
                <Image 
                    src={`/${media.image}`}
                    alt={title}
                    height={400}
                    width={400}
                    loading="eager"
                    className={styles.mediaPhoto}
                />
            ) : (
                <video
                    src={`/${media.video}`}
                    className={styles.mediaPhoto}
                    aria-label={title}
                />
            )}
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