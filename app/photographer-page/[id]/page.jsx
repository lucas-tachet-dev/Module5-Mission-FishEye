import { getPhotographer, getAllPhotographers ,getAllMediasForPhotographer } from "../../../lib/prisma-db";
import PhotographPage from "../../../components/PhotographPage/PhotographPage";

export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographerId = parseInt(id, 10)
    const photographer = await getPhotographer(photographerId);
    const photographerAllMedia = await getAllMediasForPhotographer(photographerId);

    return(
        <PhotographPage
            photographer={photographer}
            photographerAllMedia={photographerAllMedia}
        />
    )
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const photographerId = parseInt(id, 10)
    const photographer = await getPhotographer(photographerId);

    if(!photographer) {
        return{
            title: "Photographe introuvable"
        }
    }

    return {
        title: `${photographer.name} - FishEye`,
        description: `Page du photographe ${photographer.name}`
    }
}

export async function generateStaticParams(){
    const allPhotographers = await getAllPhotographers();
    return allPhotographers.map((photographer) => ({
        id: photographer.id.toString(),
    }))
}