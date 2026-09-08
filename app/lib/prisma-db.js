import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getAllPhotographers = () => prisma.photographer.findMany();

export const getPhotographer = (id) =>
  prisma.photographer.findUnique({
    where: { id: Number(id) },
  });

export const getAllMediasForPhotographer = (photographerId) =>
  prisma.media.findMany({
    where: { photographerId: Number(photographerId) },
  });

export const updateNumberOfLikes = (mediaId, newNumberOfLikes) =>
  prisma.media.update({
    where: { id: Number(mediaId) },
    data: { likes: Number(newNumberOfLikes) },
  });