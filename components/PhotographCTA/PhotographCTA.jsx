import styles from "./PhotographCTA.module.css"
import Image from "next/image"

export default function PhotographCTA({ likes, price }) {
    return (
        <div className={styles.container}>
            <div className={styles.likes}>
                <h4>{likes}</h4>
                <Image 
                    src={`/images/like_black.png`}
                    alt="likes total"
                    width={21}
                    height={24}
                />
            </div>
            <h4>{price}€ / jour</h4>
        </div>
    )
}