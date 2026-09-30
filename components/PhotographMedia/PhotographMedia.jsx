import styles from "./PhotographMedia.module.css"
import Image from "next/image"
import LikeButton from "../LikeButton/LikeButton"

export default function PhotographMedia({ name, media, onLikeChange, onClick }) {
    const onKeyDownMedia = (e) => {
        if (e.key === "Enter" || e.key === " "){
            onClick();
        }
    }

    const onKeyDownLike = (e) => {
        if (e.key === "Enter" || e.key === " "){
            onLikeChange();
        }
    }

    return(
        <li className={styles.mediaCard}
            onClick={onClick} 
            aria-label={`ouvrir le média ${media.title}`}>
            {media.image ? (
                <Image 
                    src={`/${media.image}`}
                    alt={`${media.title} de ${name}`}
                    onKeyDown={onKeyDownMedia}
                    tabIndex={0}
                    role="button"
                    aria-label={`ouvrir le média ${media.title}`}
                    height={400}
                    width={400}
                    loading="eager"
                    className={styles.mediaPhoto}
                />
            ) : (
                <video
                    src={`/${media.video}`}
                    className={styles.mediaPhoto}
                    aria-label={`${media.title} de ${name}`}
                    onKeyDown={onKeyDownMedia}
                    tabIndex={0}
                    role="button"
                />
            )}
            <div className={styles.mediaInfo}>
                <h3>{media.title}</h3>
                <div className={styles.likeSection}>
                    <LikeButton
                        media={media}
                        onLikeChange={onLikeChange}
                        onKeyDown={onKeyDownLike}
                    />
                </div>
            </div>
        </li>
    )
}