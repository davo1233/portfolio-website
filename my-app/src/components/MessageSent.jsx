import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
function MessageSent() {
    console.log('potato')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Message Sent</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>Thank you for sending the message.</Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MessageSent