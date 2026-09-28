"use client"

import Image from "next/image";
import { useState } from "react"
import { updateNumberOfLikes } from "../../lib/actions/mediaActions";
import styles from "./LikeButton.module.css"

export default function LikeButton({ media, onLikeChange}) {
    const [nbLikes, setNblikes] = useState(media.likes);
    const [liked, setLiked] = useState(false);

    const likeAction = async (e) => {
        e.stopPropagation();

        const change = liked ? -1 : 1;
        const newLike = liked ? nbLikes - 1 : nbLikes + 1;

        setLiked(!liked);
        setNblikes(newLike);
        onLikeChange(change);

        await updateNumberOfLikes(media.id, newLike);
    }

    return(
        <>
            <p>{nbLikes}</p>
            <button onClick={likeAction} className={styles.likeButton}>
                <Image 
                    src={`/images/like.png`}
                    alt="likes"
                    width={21}
                    height={24}
                />
            </button>
        </>
    )
}