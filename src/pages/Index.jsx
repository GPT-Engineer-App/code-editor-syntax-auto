import React, { useState } from "react";
import { Box, Select, Textarea, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [fileType, setFileType] = useState("html");
  const [code, setCode] = useState("");

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
    // Reset code when changing file type
    setCode("");
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const backgroundColor = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" p={8} minHeight="100vh" backgroundColor={backgroundColor}>
      <Heading mb={6}>Code Editor</Heading>
      <Select mb={4} value={fileType} onChange={handleFileTypeChange}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
        <option value="py">Python</option>
        <option value="php">PHP</option>
      </Select>
      <Textarea value={code} onChange={handleCodeChange} placeholder={`Write your ${fileType.toUpperCase()} code here...`} minHeight="60vh" p={4} resize="vertical" borderColor={borderColor} _hover={{ borderColor: "gray.400" }} _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }} />
    </Flex>
  );
};

export default Index;
