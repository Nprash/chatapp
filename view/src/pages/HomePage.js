import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"#dac0cb"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="Work sans" color="black" centerContent>
          Open Minded
        </Text>
      </Box>
      <Box
        bg="#dac0cb"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        opacity={"90%"}
      >
        <Tabs variant="soft-rounded" bg="">
          <TabList mb="1em">
            <Tab
              w="50%"
              _selected={{ bg: "#A96C85", color: "white" }}>
              Login
            </Tab>
            <Tab
              w="50%"
              _selected={{ bg: "#A96C85", color: "white" }}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
