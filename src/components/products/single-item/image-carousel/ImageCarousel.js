import React from "react";
import { Flex, Image, Box, Button } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageCarousel = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const nextImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex((prevIdx) => prevIdx + 1);
    }
  };

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIdx) => prevIdx - 1);
    }
  };

  if (!images || images.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <Flex
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      mt={3}
      gap={5}
    >
      <Image src={images[currentImageIndex]} alt="product" w={"400px"} />
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={10}>
        <Button
          onClick={previousImage}
          backgroundColor={"transparent"}
          _hover={{ backgroundColor: "transparent" }}
        >
          <MdKeyboardArrowLeft size={20} />
        </Button>
        <Flex>
          {images.map((_, index) => (
            <Box
              key={index}
              w="8px"
              h="8px"
              borderRadius="50%"
              bg={index === currentImageIndex ? "#000" : "transparent"}
              border={
                index === currentImageIndex
                  ? "1px solid #000"
                  : "1px solid #cecece"
              }
              mx={1}
            />
          ))}
        </Flex>

        <Button
          onClick={nextImage}
          backgroundColor={"transparent"}
          _hover={{ backgroundColor: "transparent" }}
        >
          <MdKeyboardArrowRight size={20} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ImageCarousel;
