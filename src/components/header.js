

// Import Libraries for making a componentn
import React from 'react';
import { Text } from 'react-native';



//Make a componentn

const Header = () => {
  const { textStyle} = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 30
  }
};
// Make the components available to other parts of the app
export default Header;
