import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import meh from "../assets/GameHub Resources/Emojis/meh.webp";
import thumbsUp from "../assets/GameHub Resources/Emojis/thumbs-up.webp";

interface Props {
  rating_top: number;
}
const Emojy = ({ rating_top }: Props) => {
  const emojyMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: bullsEye, alt: "bullsEye" },
  };
  return <Image {...emojyMap[rating_top]} boxSize="20px"></Image>;
};

export default Emojy;
