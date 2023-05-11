import { React, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button, 
} from '@chakra-ui/react';
import MessageSent from './MessageSent';

/*
creates a contact form tha the user can use to contact me in the contact page
*/
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_l1605eg', 'template_9b6algh', templateParams, 'UdizfVQJpByG28Jsw')
        .then((result) => {
          console.log(result.text);
          event.target.reset();
          
        }, (error) => {
          console.log(error.text);
        });
    };
    
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" name = "user_name">
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    w="400px"
                />
                </FormControl>
        
                <FormControl id="email" mt={4} name = "user_email">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        w="400px"
                    /> 
                </FormControl>
    
                <FormControl id="message" mt={4} name = "message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        placeholder="Enter your message"
                        onChange={(e) => setMessage(e.target.value)}
                        w="400px"
                    />
                </FormControl>
    
                <Button type="submit" colorScheme="blue" mt={4}>
                    Submit
                </Button>
                {messageSent && <MessageSent />}
          </form>
        </Box>
      );
}

export default ContactForm;