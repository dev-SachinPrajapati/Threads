// import { OurFileRouter } from "@/app/api/uploadthing/core";
// import { generateUploadButton } from "@uploadthing/react";
 
// export const UploadButton = generateUploadButton<OurFileRouter>();



import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();