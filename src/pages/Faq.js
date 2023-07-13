import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={5}
      mb={40}
      w={"60%"}
      textAlign={"center"}
    >
      <Heading m={10} fontFamily={"noto sans"}>
        FAQ
      </Heading>
      <Text>
        <strong>Question</strong>: How long are your delivery times?
      </Text>
      <Text borderBottomWidth={1} paddingBottom={5}>
        <strong>Answer</strong>: We try to send out our orders the same day if
        the order is placed before 12:00. Otherwise, it usually takes one
        working day. Then it takes 2-4 days for the post office to deliver the
        packages. For international shipments, the usual time is betwen 3-5
        days, depending on where you are.
      </Text>
      <Text>
        <strong>Question</strong>: I didn't like how a certain product worked.
        Can I return it?
      </Text>
      <Text>
        <strong>Answer</strong>: Only unused and unopened products can be
        returned. The customer is responsible for returning the product within
        14 days of receiving it. The customer is responsible for the cost of
        returned shipping. The refund is made within 14 days after we have
        received the returned item.
      </Text>
    </Flex>
  );
};

export default Faq;
