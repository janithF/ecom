import { Icon } from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

interface Props {
  rating: number;
  maxStars?: number;
}

const Rating = ({ rating, maxStars = 5 }: Props) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      // Full star
      stars.push(<Icon as={FaStar} key={i} color="yellow.400" />);
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(<Icon as={FaRegStarHalfStroke} key={i} color="yellow.400" />);
    } else {
      // Empty star
      stars.push(<Icon as={FaRegStar} key={i} color="gray.400" />);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
