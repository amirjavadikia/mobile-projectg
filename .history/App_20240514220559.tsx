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
  const [showTools, setShowTools] = useState(true);
  const [newText, setNewText] = useState('');
  const [newTextColor, setNewTextColor] = useState('');
  const [newBackgroundColor, setNewBackgroundColor] = useState('');
  const [newBorderColor, setNewBorderColor] = useState('');
  const [newBorderWidth, setNewBorderWidth] = useState('');
  const [newBorderRadius, setNewBorderRadius] = useState('');
  const [applyChanges, setApplyChanges] = useState(false);

  const handleTextChange = (inputText) => {
    setNewText(inputText);
    setApplyChanges(false); 
  };

  const handleTextColorChange = (inputText) => {
    setNewTextColor(inputText);
    setApplyChanges(false); 
  };

  const handleBackgroundChange = (inputText) => {
    setNewBackgroundColor(inputText);
    setApplyChanges(false); 
  };

  const handleBorderColorChange = (inputText) => {
    setNewBorderColor(inputText);
    setApplyChanges(false); 
  };

  const handleBorderWidthChange = (inputText) => {
    setNewBorderWidth(inputText);
    setApplyChanges(false); 
  };

  const handleBorderRadiusChange = (inputText) => {
    setNewBorderRadius(inputText);
    setApplyChanges(false); 
  };

  const handleApplyChanges = () => {
    setText(newText);
    setApplyChanges(true); 
  };

  const handleResetChanges = () => {
    setApplyChanges(false); 
    setText('');
    setNewText('');
    setNewTextColor('');
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
            <Text style={styles.title}>Text Setting</Text>
            <View style={styles.section}>
              <Text style={styles.label}>Text Contain:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleTextChange}
                value={newText}
                placeholder="Text Contain"
              />
              <Text style={styles.label}>Text Color:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleTextColorChange}
                value={newTextColor}
                placeholder="Text Color"
              />
            </View>

            <Text style={styles.title}>Box Setting</Text>
            <View style={styles.section}>
              <Text style={styles.label}>Background Color:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleBackgroundChange}
                value={newBackgroundColor}
                placeholder="Background Color"
              />
              <Text style={styles.label}>Border Color:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleBorderColorChange}
                value={newBorderColor}
                placeholder="Border Color"
              />
              <Text style={styles.label}>Border Width:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleBorderWidthChange}
                value={newBorderWidth}
                placeholder="Border Width"
              />
              <Text style={styles.label}>Border Radius:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleBorderRadiusChange}
                value={newBorderRadius}
                placeholder="Border Radius"
              />
            </View>

            
          </>
        )}
        <View style={styles.buttonGroup}>
              { showTools && (
                <>
                <View style={styles.applyButton}>
                  <Button title="Apply" onPress={handleApplyChanges} />
                </View>

                <View style={styles.resetButton}>
                <Button title="Reset" onPress={handleResetChanges} style />
                </View>
                </>
              )}
              <View style={styles.showButton}>
              <Button title={showTools ? "Hide Tools" : "Show Tools"} onPress={handleToggleTools} />
              </View>
            </View>
        <View style={[styles.box, { backgroundColor: applyChanges ? newBackgroundColor : '#fff', borderRadius: applyChanges ? parseInt(newBorderRadius) || 0 : 0, borderWidth: applyChanges ? parseInt(newBorderWidth) || 1 : 1, borderColor: applyChanges ? newBorderColor : "#111" }]}>
          <Text style={[styles.boxText, {color: applyChanges ? newTextColor : ''}]}>{text}</Text>
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
    backgroundColor: '#fff',
  },
  section: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: "#f3f3f3",
    borderWidth: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'left',
    borderRadius: 30,
    backgroundColor: "#fff"
  },
  box: {
    width: '80%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {

  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  applyButton: {
    marginRight: 10,
    borderRadius: 20
  },
  resetButton: {
    marginRight: 10
  },
  showButton: {
    borderRadius: 20
  }
});

export default App;







