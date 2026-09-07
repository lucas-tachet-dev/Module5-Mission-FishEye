import styles from "./page.module.css"
import Image from "next/image";
import { getAllPhotographers } from "./lib/prisma-db"


export default async function Home() {
    const photographers = await getAllPhotographers();

    return(
        <section>
            <ul>
                {photographers.map((photographer) => (
                    <li key={photographer.id}>
                        <Image 
                            src={`/${photographer.portrait}`}
                            alt={`Portrait du photographe ${photographer.name}`}
                            width={300}
                            height={300}
                            />
                        <h2>{photographer.name}</h2>
                        <p>{photographer.city}, {photographer.country}</p>
                        <p>{photographer.tagline}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}