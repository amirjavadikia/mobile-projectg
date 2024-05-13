// 
// => BOXES PROJECT
//

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
// import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook';


// const MainPage = () => {
//   return (
//     <View style={styles.container}>

//       <View style={[styles.blueBackground]}>
//         <Text style={styles.text}>Welcome to my app!</Text>
//       </View>
      
      
//       <View style={[styles.box, styles.purpleBackground]}>
//       <FontAwesomeIcon icon={faLocationDot} />
//         <Text style={styles.text}>Location</Text>
//       </View>

      
//       <View style={[styles.box, styles.yellowBackground]}>
//       <FontAwesomeIcon icon={faGear} />
//         <Text style={styles.text}>Settings</Text>
//       </View>

      
//       <View style={[styles.box, styles.redBackground]}>
//       <FontAwesomeIcon icon={faAddressBook} />
//         <Text style={styles.text}>Contacts</Text>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   box: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 15,
//     justifyContent: 'center',
//     textAlign: 'center',
//     alignItems: 'center',
//   },
//   blueBackground: {
//     backgroundColor: '#01008A',
//     borderRadius: 30,
//     width: '100%',
//     height: '10%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20
//   },
//   purpleBackground: {
//     backgroundColor: '#810081',
//   },
//   yellowBackground: {
//     backgroundColor: '#fea501',
//   },
//   redBackground: {
//     backgroundColor: '#fe0002',
//   },
//   text: {
//     color: 'white',
//     fontSize: 20,
//     marginLeft: 10,
//   },
// });

// export default MainPage;





// 
// => MIDTERM PROJECT
//


import React, { useState } from 'react';
import { View,Text, TextInput, StyleSheet, Button } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [showTools, setShowTools] = useState(true);
  const [newText, setNewText] = useState('');
  const [newBackgroundColor, setNewBackgroundColor] = useState('');

  const handleTextChange = (inputText) => {
    setNewText(inputText);
  };

  const handleBackgroundChange = (inputText) => {
    setNewBackgroundColor(inputText);
  };

  const handleApplyChanges = () => {
    setText(newText);
    setBackgroundColor(newBackgroundColor);
    setNewText('');
    setNewBackgroundColor('');
  };

  const handleResetChanges = () => {
    setText('');
    setBackgroundColor('#fff');
    setNewText('');
    setNewBackgroundColor('');
  };

  const handleToggleTools = () => {
    setShowTools(!showTools);
  };

  return (
    <View style={styles.container}>
      {showTools && (
        <>
          <View style={styles.text_settings}>
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            value={newText}
            placeholder="Enter text for box"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleBackgroundChange}
            value={newBackgroundColor}
            placeholder="Enter background color for box"
          />
          </View>

          <View >

          </View>
          <Button title="Apply" onPress={handleApplyChanges} />
          <Button title="Reset" onPress={handleResetChanges} />
        </>
      )}
      <Button title={showTools ? "Hide Tools" : "Show Tools"} onPress={handleToggleTools} />
      <View style={[styles.box, { backgroundColor }]}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: '80%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;



