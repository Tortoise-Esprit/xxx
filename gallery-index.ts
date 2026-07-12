import { gallery } from "./gallery";
import { galleryBatch0427To0561 } from "./gallery-batches/gallery_0427_0561";
import { galleryBatch0571To0632 } from "./gallery-batches/gallery_0571_0632";

export const allGallery = [
  ...gallery,
  ...galleryBatch0427To0561,
  ...galleryBatch0571To0632,
];