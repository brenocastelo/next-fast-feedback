import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/styles/theme";

const Header = () => {
  const { user } = useAuth();

  return (
    <Flex w="100%" direction="column">
      <Box background="#20B2AA" w="100%" h="10px" />

      <Flex
        w="100%"
        justify="space-between"
        align="center"
        p={4}
        backgroundColor="#fff"
      >
        <Flex align="center">
          <Logo />

          <Flex ml={10}>
            <Link size="" mr={5}>
              Sites
            </Link>
            <Link>Feedbacks</Link>
          </Flex>
        </Flex>
        <Flex align="center">
          <Link>Account</Link>
          <Avatar name="Breno" src={user.photoUrl} ml={5} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
