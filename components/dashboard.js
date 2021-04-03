import { Spinner } from "@chakra-ui/spinner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";

import Header from "@/components/header";
import { useAuth } from "lib/auth";

const Dashboard = ({ children }) => {
  const { user, signOut } = useAuth();

  if (!user) return <Spinner size="lg" margin="auto" />;

  return (
    <Flex background="gray.100" h="100vh" direction="column">
      <Header />

      <Flex m="50px auto" direction="column" maxW="1250px" px={8} w="full">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex justify="space-between" mb={10}>
          <Heading>My sites</Heading>
          <Button
            backgroundColor="gray.900"
            color="#fff"
            fontWeight="medium"
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)"
            }}
          >
            + Add site
          </Button>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
