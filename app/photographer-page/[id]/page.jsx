import { getPhotographer, getAllMediasForPhotographer } from "../../lib/prisma-db";
import PhotographHeader from "../../../components/PhotographHeader/PhotographHeader";
import PhotographMedia from "../../../components/PhotographMedia/PhotographMedia";
import styles from "./page.module.css"

export default async function PhotographerPage({ params }) {
    const { id } = await params;

    const photographerId = parseInt(id, 10)
    const photographer = await getPhotographer(photographerId);
    const photographerAllMedia = await getAllMediasForPhotographer(photographerId);

    return(
        <main>
            <PhotographHeader
                key={photographer.id}
                name={photographer.name}
                city={photographer.city}
                country={photographer.country}
                tagline={photographer.tagline}
                portrait={photographer.portrait}
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
    )
}