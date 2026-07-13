import { gallery as galleryBatch0275To0424 } from "./gallery-batches/gallery_0275_0424";
import { galleryBatch0427To0561 } from "./gallery-batches/gallery_0427_0561";
import { galleryBatch0571To0632 } from "./gallery-batches/gallery_0571_0632";
import { galleryBatch0633To0661 } from "./gallery-batches/gallery_0633_0661";
import { galleryBatch0662To0684 } from "./gallery-batches/gallery_0662_0684";
import { galleryBatch0685To0709 } from "./gallery-batches/gallery_0685_0709";
import { galleryBatch0710To0738 } from "./gallery-batches/gallery_0710_0738";
import { galleryBatch0739To0758 } from "./gallery-batches/gallery_0739_0758";
import { galleryBatch0759To0781 } from "./gallery-batches/gallery_0759_0781";
import { galleryBatch0782To0812 } from "./gallery-batches/gallery_0782_0812";
import { galleryBatch0813To0835 } from "./gallery-batches/gallery_0813_0835";
import { galleryBatch0836To0860 } from "./gallery-batches/gallery_0836_0860";
import { galleryBatch0861To0885 } from "./gallery-batches/gallery_0861_0885";
import { galleryBatch0886To0911 } from "./gallery-batches/gallery_0886_0911";
import { galleryBatch0914To0929 } from "./gallery-batches/gallery_0914_0929";

const selectedPhotoIds = new Set([
  "DSC_0287",
  "DSC_0336",
  "DSC_0346",
  "DSC_0360",
  "DSC_0371",
  "DSC_0405",
  "DSC_0519",
  "DSC_0622",
  "DSC_0635",
  "DSC_0650",
  "DSC_0724",
  "DSC_0743",
  "DSC_0759",
  "DSC_0777",
  "DSC_0790",
  "DSC_0818",
  "DSC_0823",
  "DSC_0835",
  "DSC_0836",
  "DSC_0849",
  "DSC_0851",
  "DSC_0856",
  "DSC_0857",
  "DSC_0883",
  "DSC_0899",
  "DSC_0916",
  "DSC_0918",
  "DSC_0920",
  "DSC_0927",
  "DSC_0928",
  "DSC_0929",
]);

const gallerySource = [
  ...galleryBatch0275To0424,
  ...galleryBatch0427To0561,
  ...galleryBatch0571To0632,
  ...galleryBatch0633To0661,
  ...galleryBatch0662To0684,
  ...galleryBatch0685To0709,
  ...galleryBatch0710To0738,
  ...galleryBatch0739To0758,
  ...galleryBatch0759To0781,
  ...galleryBatch0782To0812,
  ...galleryBatch0813To0835,
  ...galleryBatch0836To0860,
  ...galleryBatch0861To0885,
  ...galleryBatch0886To0911,
  ...galleryBatch0914To0929,
];

export const allGallery = gallerySource.map((item) => ({
  ...item,
  visible: selectedPhotoIds.has(item.id),
}));
