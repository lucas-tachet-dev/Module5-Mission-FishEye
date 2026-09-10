"use client"

import { useState, useEffect } from "react"
import styles from "./PhotographPage.module.css"
import PhotographHeader from "../PhotographHeader/PhotographHeader"
import PhotographMedia from "../PhotographMedia/PhotographMedia"
import ContactModal from "../ContactModal/ContactModal"

export default function PhotographPage({ photographer, photographerAllMedia }) {
        const [isContactModalOpen, setIsContactModalOpen] = useState(false);

        useEffect(() => {
            let body = document.body;

            if(isContactModalOpen) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "unset";
            }

            return () => {
                body.style.overflow = "unset";
            };
        }, [isContactModalOpen]);

        return (
            <>
                <main aria-hidden={isContactModalOpen}>
                    <PhotographHeader
                        key={photographer.id}
                        name={photographer.name}
                        city={photographer.city}
                        country={photographer.country}
                        tagline={photographer.tagline}
                        portrait={photographer.portrait}
                        onOpen={() => setIsContactModalOpen(true)}
                    />
                    <ul className={styles.mediaGrid}>
                        {photographerAllMedia.map((media) => (
                            <PhotographMedia
                                key={media.id}
                                title={media.title}
                                image={media.image}
                                likes={media.likes}
                            />
                        ))}
                    </ul>
                </main>
                <ContactModal 
                    name={photographer.name}
                    isOpen={isContactModalOpen}
                    onClose={() => setIsContactModalOpen(false)}
                />
            </>
        )
}