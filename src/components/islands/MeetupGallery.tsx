import { useState } from "react";
import type { ICloudinaryList } from "@/lib/interfaces";
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog";
import MeetupPhoto from "./MeetupPhoto";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/ShadCNButton";
interface cloudinaryImages {
  cloudinaryList: ICloudinaryList[];
}

const MeetupGallery = ({ cloudinaryList }: cloudinaryImages) => {
  const [selectedImage, setSelectedImage] = useState(
    cloudinaryList[0].secure_url,
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % cloudinaryList.length;
    setSelectedImage(cloudinaryList[nextIndex].secure_url);
    setSelectedImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (selectedImageIndex - 1 + cloudinaryList.length) % cloudinaryList.length;
    setSelectedImage(cloudinaryList[prevIndex].secure_url);
    setSelectedImageIndex(prevIndex);
  };

  return (
    <>
      <div className="my-14 grid grid-cols-2 justify-center gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {cloudinaryList?.map(
          ({ public_id, _key, version, height, width, secure_url }, indx) => (
            <Dialog key={_key}>
              <DialogTrigger
                onClick={() => {
                  setSelectedImage(secure_url);
                  setSelectedImageIndex(indx);
                }}
              >
                <MeetupPhoto
                  key={_key}
                  smallImg={`https://res.cloudinary.com/${import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.webp`}
                  largeImg={`https://res.cloudinary.com/${import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${version}/${public_id}.webp`}
                  alt={public_id}
                  height={height}
                  width={width}
                  loading={indx < 3 ? "eager" : "lazy"} // loads the first 3 images and lazy loads the rest
                  className="h-36 object-cover object-top lg:h-60"
                  sizes="(max-width: 200px) 100vw, 45vw"
                />
              </DialogTrigger>
              <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                <div className="flex flex-col items-center justify-between">
                  <div className="h-full w-full md:h-[43.75rem]">
                    <MeetupPhoto
                      key={_key}
                      smallImg={selectedImage}
                      largeImg={selectedImage}
                      alt={public_id}
                      height={height}
                      width={width}
                      loading={indx < 3 ? "eager" : "lazy"} // loads the first 3 images and lazy loads the rest
                      className="object-contain md:h-full md:w-full"
                      sizes="(max-width: 200px) 100vw, 45vw"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    {/* Previous button */}
                    <Button variant="outline" onClick={handlePrev}>
                      <ChevronLeft className="h-10 w-10" />
                      Prev
                    </Button>

                    {/* Next button */}
                    <Button variant="outline" onClick={handleNext}>
                      Next
                      <ChevronRight className="h-10 w-10" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ),
        )}
      </div>
    </>
  );
};

export default MeetupGallery;
