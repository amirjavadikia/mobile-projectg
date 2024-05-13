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
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [showTools, setShowTools] = useState(true);
  const [newText, setNewText] = useState('');
  const [newBackgroundColor, setNewBackgroundColor] = useState('');
  const [newBorderColor, setNewBorderColor] = useState('');
  const [newBorderWidth, setNewBorderWidth] = useState('');
  const [newBorderRadius, setNewBorderRadius] = useState('');

  const handleTextChange = (inputText) => {
    setNewText(inputText);
  };

  const handleBackgroundChange = (inputText) => {
    setNewBackgroundColor(inputText);
  };

  const handleBorderColorChange = (inputText) => {
    setNewBorderColor(inputText);
  };

  const handleBorderWidthChange = (inputText) => {
    setNewBorderWidth(inputText);
  };

  const handleBorderRadiusChange = (inputText) => {
    setNewBorderRadius(inputText);
  };

  const handleApplyChanges = () => {
    setText(newText);
    setBackgroundColor(newBackgroundColor);
    setNewText('');
    setNewBackgroundColor('');
    setNewBorderColor('');
    setNewBorderWidth('');
    setNewBorderRadius('');
  };

  const handleResetChanges = () => {
    setText('');
    setBackgroundColor('#fff');
    setNewText('');
    setNewBackgroundColor('');
    setNewBorderColor('');
    setNewBorderWidth('');
    setNewBorderRadius('');
  };

  const handleToggleTools = () => {
    setShowTools(!showTools);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {showTools && (
          <>
            <View style={styles.section}>
              <Text style={styles.title}>Text Setting</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleTextChange}
                value={newText}
                placeholder="Text Contain"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleBackgroundChange}
                value={newBackgroundColor}
                placeholder="Text Color"
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.title}>Box Setting</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleBorderColorChange}
                value={newBorderColor}
                placeholder="Border Color"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleBorderWidthChange}
                value={newBorderWidth}
                placeholder="Border Width"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleBorderRadiusChange}
                value={newBorderRadius}
                placeholder="Border Radius"
              />
            </View>

            <View style={styles.buttonGroup}>
              <Button title="Apply" onPress={handleApplyChanges} />
              <Button title="Reset" onPress={handleResetChanges} />
            </View>
          </>
        )}
        <Button title={showTools ? "Hide Tools" : "Show Tools"} onPress={handleToggleTools} />
        <View style={[styles.box, { backgroundColor }]}>
          <Text>{text}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  section: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: "#f3f3f3",
    borderWidth:
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'left',
    borderRadius: 30,
  },
  box: {
    width: '80%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;



