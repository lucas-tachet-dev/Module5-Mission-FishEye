"use client"

import styles from "./LightBoxModal.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function LightBoxModal({ medias, isOpen, onClose, index }){

    const [currentIndex, setCurrentIndex] = useState(index)
    
    useEffect(() => {
        setCurrentIndex(index)
    }, [index])

    // Gestion de navigation
    const nextMedia = () => {
        let newIndex = currentIndex + 1;

        if(newIndex > medias.length - 1) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex)
    }

    const previousMedia = () => {
        let newIndex = currentIndex - 1;
        
        if(newIndex < 0){
            newIndex = medias.length - 1;
        }
        setCurrentIndex(newIndex);
    }

    // Accessibilité navigation avec touches
    useEffect(() => {
        if (!isOpen) return;

        const keyDown = (e) => {
            if(e.key === "Escape")
                onClose();

            if(e.key === "ArrowLeft")
                previousMedia();

            if(e.key === "ArrowRight")
                nextMedia();
        }
        
        window.addEventListener("keydown", keyDown);

        return () => {
            window.removeEventListener("keydown", keyDown);
        }
    }, [onClose, previousMedia, nextMedia])


    // Check avant affichage
    if(!isOpen || !medias || medias.length === 0)
        return null

    const currentMedia = medias[currentIndex];

    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modal} aria-hidden="false" role="dialog" aria-label="image closeup view">
                <button onClick={onClose} className={styles.closeCross} aria-label="Close dialog">
                    <Image
                        src="/images/close-bordeaux.png"
                        alt="Close dialog"
                        height={42}
                        width={42}
                    />
                </button>
                <div className={styles.mediaDisplay}>
                    <button onClick={previousMedia} className={styles.navButton} aria-label="Previous image">
                        <Image
                            src="/images/arrow-left.png"
                            alt="Previous image"
                            height={48}
                            width={30}
                        />
                    </button>
                    <div className={styles.mediaContainer}>
                        {currentMedia.image ? (
                            <Image
                                src={`/${currentMedia.image}`}
                                alt={currentMedia.title}
                                height={800}
                                width={1100}
                                className={styles.mediaContent}
                            />
                        ) : (
                            <video
                                src={`/${currentMedia.video}`}
                                autoPlay
                                controls
                                className={styles.mediaContent}
                                aria-label={currentMedia.title}
                            />
                        )}
                        <h2>{currentMedia.title}</h2>
                    </div>
                    <button onClick={nextMedia} className={styles.navButton} aria-label="Next image">
                        <Image
                            src="/images/arrow-right.png"
                            alt="Previous image"
                            height={48}
                            width={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}