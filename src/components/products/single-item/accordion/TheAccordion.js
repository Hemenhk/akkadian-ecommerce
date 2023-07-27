import React from "react";
import AccordionReviews from "./reviews/AccordionReviews";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CreateReviewForm from "./reviews/CreateReviewForm";

const TheAccordion = ({ ingredients, usage, ratingsQuantity}) => {
  return (
    <Accordion allowMultiple w={450}>
      <AccordionItem p={"1rem"}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box as="span" textAlign="left">
                  <Text
                    fontFamily={"inter"}
                    fontSize={".8rem"}
                    fontWeight={"300"}
                    letterSpacing={1}
                  >
                    USAGE
                  </Text>
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus width={20} />
                ) : (
                  <AiOutlinePlus width={20} />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontFamily={"inter"}
              fontSize={".8rem"}
              fontWeight={400}
              letterSpacing={0.5}
              lineHeight={1.75}
            >
              {usage}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem p={"1rem"}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box as="span" textAlign="left">
                  <Text
                    fontFamily={"inter"}
                    fontSize={".8rem"}
                    fontWeight={"300"}
                    letterSpacing={1}
                  >
                    INGREDIENTS
                  </Text>
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus width={20} />
                ) : (
                  <AiOutlinePlus width={20} />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontFamily={"inter"}
              fontSize={".8rem"}
              fontWeight={400}
              letterSpacing={0.5}
              lineHeight={1.75}
            >
              {ingredients}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem p={"1rem"}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box as="span" textAlign="left">
                  <Text
                    fontFamily={"inter"}
                    fontSize={".8rem"}
                    fontWeight={"300"}
                    letterSpacing={1}
                  >
                    REVIEWS ({ratingsQuantity})
                  </Text>
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus width={20} />
                ) : (
                  <AiOutlinePlus width={20} />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontFamily={"inter"}
              fontSize={".8rem"}
              fontWeight={400}
              letterSpacing={0.5}
              lineHeight={1.5}
            >
              <CreateReviewForm />
              <AccordionReviews />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default TheAccordion;
