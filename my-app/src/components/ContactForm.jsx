import { React, useState} from 'react';
import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button, 
} from '@chakra-ui/react';

/*
creates a contact form tha the user can use to contact me in the contact page
*/
function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };
    
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    w="400px"
                    onChange={(e) => setName(e.target.value)}
                />
                </FormControl>
        
                <FormControl id="email" mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        w="400px"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
    
                <FormControl id="message" mt={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        placeholder="Enter your message"
                        value={message}
                        w="400px"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>
    
                <Button type="submit" colorScheme="blue" mt={4}>
                    Submit
                </Button>
          </form>
        </Box>
      );
}

export default ContactForm;