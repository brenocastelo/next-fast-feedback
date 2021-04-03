import { Flex, Heading, Text } from "@chakra-ui/layout";
import AddSiteModal from "@/components/add-site-modal";

const EmptyState = () => {
  return (
    <Flex
      background="#fff"
      p={16}
      borderRadius={10}
      justify="center"
      align="center"
      direction="column"
      w="full"
    >
      <Heading size="lg" mb={2}>
        You have not added any sites.
      </Heading>
      <Text mb={5}>Welcome! Let's get started!</Text>

      <AddSiteModal />
    </Flex>
  );
};

export default EmptyState;
