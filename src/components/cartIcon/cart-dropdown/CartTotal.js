
import { useDispatch } from "react-redux";
import { setClearCart } from "../../../redux/reducers/cartSlice";
import { Button, Flex, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";

const CartTotal = ({ itemCount, total }) => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(setClearCart());
  };
  return (
    <Flex flexDirection={"column"} gap={4} pb={10}>
      <Text fontFamily={"noto sans"} textTransform={"uppercase"} fontSize={14}>Total items: {itemCount}</Text>
      <Flex flexDirection={"column"} gap={2}>
        <Button
          display={"flex"}
          alignItems={"center"}
          gap={2}
          fontFamily={"noto sans"}
          bgGradient={"linear(to-r, white 50%, black 50%)"}
          bgSize={"200% 100%"}
          bgPosition={"right bottom"}
          color={"#fff"}
          borderw={"1px solid black"}
          borderRadius={2}
          transition={"all 0.5s ease-out"}
          _hover={{
            backgroundPosition: "left bottom",
            color: "#000",
          }}
        >
          <Text>CHECKOUT</Text>
          <BsDot />
          <Text>{`$ ${total.toFixed(0)}`}</Text>
        </Button>
        <Button
          onClick={clearCartHandler}
          fontFamily={"noto sans"}
          fontWeight={"00"}
          bg={"transparent"}
          color={"#000"}
          _hover={{ backgroundColor: "transparent" }}
        >
          CLEAR
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartTotal;
