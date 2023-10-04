import { extendTheme } from '@chakra-ui/react';
import { cardStyle } from '../styling'; // Import the CardStyleConfig

const theme = extendTheme({
  components: {
    Card: cardStyle, // Add the CardStyleConfig to the theme's components
  },
  colors: {
    primary: {
      500: '#ff5722',
    },
  },
  fonts: {
    heading: 'Helvetica Neue, sans-serif',
    body: 'Arial, sans-serif',
  },
});

export default theme;






