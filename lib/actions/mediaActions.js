'use server'

import { prisma } from "../prisma-db";

export const updateNumberOfLikes = async (mediaId, newNumberOfLikes) => {
    return await prisma.media.update({
        where: { id: Number(mediaId) },
        data: { likes: Number(newNumberOfLikes) },
    });
};