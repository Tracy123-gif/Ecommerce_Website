import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

const emailModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const toast = useToast();

  // Handle email submission
  const handleEmailSubmit = () => {
    if (email) {
      toast({
        title: "Email Submitted",
        description: `Your email ${email} has been submitted successfully.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      onClose();  // Close modal after submission
    } else {
      toast({
        title: "Email Required",
        description: "Please enter a valid email.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <Button onClick={onOpen} colorScheme="blue">
        Open Email Modal
      </Button>

      {/* Chakra UI Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEmailSubmit}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default emailModal;
