"use client"

import Image from "next/image"
import styles from "./ContactModal.module.css"
import { useEffect } from "react"

export default function ContactModal({ name, isOpen, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    // Accessibilité fermer la modale avec esc
    useEffect(() => {
        if (!isOpen) return;

        const keyDown = (e) => {
            if(e.key === "Escape")
                onClose();
        }
        
        window.addEventListener("keydown", keyDown);

        return () => {
            window.removeEventListener("keydown", keyDown);
        }
    }, [onClose])
    
    if(!isOpen)
        return null

    return(
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modal} aria-hidden="false" role="dialog" aria-labelledby="modalTitle" onClick={(e) => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h1 id="modalTitle">Contactez-moi<br />{name}</h1>
                        <button onClick={onClose} className={styles.closeCross}>
                            <Image
                                src="/images/close.png"
                                alt="Close Contact form"
                                height={42}
                                width={42}
                            />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="firstName">Prénom</label>
                        <input type="text" id="firstName" name="firstName" required/>
                        <label htmlFor="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" required/>
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email" required/>
                        <label htmlFor="yourMessage">Votre message</label>
                        <textarea id="yourMessage" name="yourMessage" rows={6} required/>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
                
    )
}