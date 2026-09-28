"use client"

import { useState, useEffect } from "react"
import styles from "./PhotographPage.module.css"
import PhotographHeader from "../PhotographHeader/PhotographHeader"
import SortingOptions from "../SortingOptions/SortingOptions"
import PhotographMedia from "../PhotographMedia/PhotographMedia"
import ContactModal from "../ContactModal/ContactModal"
import LightBoxModal from "../LightBoxModal/LightBoxModal"
import PhotographCTA from "../PhotographCTA/PhotographCTA"

export default function PhotographPage({ photographer, photographerAllMedia }) {
        // Gestion d'ouverture/fermeture de la modale de contact
        const [isContactModalOpen, setIsContactModalOpen] = useState(false);

        // Gestion d'ouverture/fermeture de la modale Lightbox
        const [isLightboxModalOpen, setIsLightboxModalOpen] = useState(false);

        // Gestion du défillement du body
        useEffect(() => {
            let body = document.body;

            if(isContactModalOpen || isLightboxModalOpen) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "unset";
            }

            return () => {
                body.style.overflow = "unset";
            };
        }, [isContactModalOpen, isLightboxModalOpen]);

        // Gestion de l'index
        const [indexMedia, setIndexMedia] = useState(0);

        // Gestion de l'option de tri
        const [sortBy, setSortBy] = useState("");

        // fonctions de tri
        const sortByParameter = (a , b, p) => {
                return a[p] - b[p];
        }

        const sortByText = (a, b, p) => {
            return a[p].localeCompare(b[p]);
        }

        // Tri des medias
        const sortedMedias = sortBy ? photographerAllMedia.toSorted((a, b) => {
            if(sortBy === "likes") {
                return sortByParameter(b, a, "likes")
            }
            if(sortBy === "date") {
                return sortByText(a, b, "date")
            }
            if(sortBy === "title") {
                return sortByText(a, b, "title")
            }
        }) : photographerAllMedia;

        // Récup des likes global du photographe
        const likesList = photographerAllMedia.map(media => media.likes);
        const initialTotalLikes = likesList.reduce((total, likes) => total + likes, 0);

        const [totalLikes, setTotalLikes] = useState(initialTotalLikes);

        const likeChange = (change) => {
            setTotalLikes((prevTotal) => prevTotal + change)
        }

        return (
            <>
                <main aria-hidden={isContactModalOpen || isLightboxModalOpen}>
                    <PhotographHeader
                        key={photographer.id}
                        name={photographer.name}
                        city={photographer.city}
                        country={photographer.country}
                        tagline={photographer.tagline}
                        portrait={photographer.portrait}
                        onOpen={() => setIsContactModalOpen(true)}
                    />
                    <SortingOptions 
                        selectedOption={sortBy}
                        onChange={setSortBy}
                    />
                    <ul className={styles.mediaGrid}>
                        {sortedMedias.map((media, index) => (
                            <PhotographMedia
                                key={media.id}
                                name={photographer.name}
                                media={media}
                                onLikeChange={likeChange}
                                onClick={() => {
                                    setIndexMedia(index);
                                    setIsLightboxModalOpen(true)}}
                            />
                        ))}
                    </ul>
                    <PhotographCTA 
                        likes={totalLikes}
                        price={photographer.price}
                    />
                </main>
                <ContactModal 
                    name={photographer.name}
                    isOpen={isContactModalOpen}
                    onClose={() => setIsContactModalOpen(false)}
                />
                <LightBoxModal
                    medias={photographerAllMedia}
                    index={indexMedia}
                    isOpen={isLightboxModalOpen}
                    onClose={() => setIsLightboxModalOpen(false)}
                />
            </>
        )
}