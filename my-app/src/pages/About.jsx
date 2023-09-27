import React from 'react';
import { Disclosure } from '@headlessui/react';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>Welcome to my portfolio website! I'm passionate about various hobbies and interests that have shaped me into who I am today.</p>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="font-bold text-lg">Hobbies</Disclosure.Button>
            <Disclosure.Panel className="ml-4 mt-2">
              <ul>
                <li>Photography: I love capturing moments and exploring different perspectives through my camera lens. It allows me to express my creativity and document beautiful memories.</li>
                <li>Hiking: Exploring nature and embarking on challenging hikes is something I find truly invigorating. It helps me connect with the outdoors and find peace in the midst of nature.</li>
                <li>Reading: Books are my constant companions. I enjoy diving into different genres, expanding my knowledge, and discovering new ideas through literature.</li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="font-bold text-lg">Interests</Disclosure.Button>
            <Disclosure.Panel className="ml-4 mt-2">
              <ul>
                <li>Technology: I'm fascinated by the ever-evolving world of technology. Exploring new gadgets and learning about emerging trends keeps me engaged and inspired.</li>
                <li>Web Development: Building websites and crafting intuitive user experiences is a passion of mine. I enjoy working with various web technologies and constantly expanding my skills in this field.</li>
                <li>Travel: Exploring different cultures and experiencing new destinations is a great source of inspiration for me. It broadens my perspective and allows me to appreciate the beauty of diversity.</li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <p>I believe that combining my diverse hobbies and interests with my skills in web development allows me to create unique and engaging digital experiences.</p>
      <p>Thank you for visiting my portfolio website. Feel free to explore my projects and get in touch if you have any questions or collaboration opportunities.</p>
    </div>
  );
};

export default About;