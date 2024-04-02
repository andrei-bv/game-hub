import { SkeletonOptions } from "@chakra-ui/react";
import noImage from '../assets/GameHub Resources/Image Placeholder/no-image-placeholder-6f3882e0.webp'

 const getCroppedImage = (imageUrl:string)=>
{
    if (!imageUrl) return noImage;
    return  imageUrl.replace("media/", "media/crop/600/400/")
}

export default getCroppedImage;