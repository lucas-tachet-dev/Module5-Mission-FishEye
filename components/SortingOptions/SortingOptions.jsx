"use client"

import styles from "./SortingOptions.module.css"

export default function SortingOptions({ selectedOption, onChange }) {
    return (
        <div className={styles.sortingContainer}>
            <label htmlFor="dropdownMenu">Trier par</label>
            <select 
                id="dropdownMenu"
                value={selectedOption} 
                onChange={(e) => onChange(e.target.value)}>
                <option value="likes">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
        </div>
        )
        
}