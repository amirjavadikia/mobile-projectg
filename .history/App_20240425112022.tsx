import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



const MainPage = () => {
  return (
    <View style={styles.container}>

      <View style={[styles.blueBackground]}>
      <FontAwesomeIcon icon={faMugSaucer} />
        <Text style={styles.text}>Welcome to my app!</Text>
      </View>
      
      
      <View style={[styles.box, styles.purpleBackground]}>
    
        
      
        <Text style={styles.text}>Location</Text>
      </View>

      
      <View style={[styles.box, styles.yellowBackground]}>
        <Text style={styles.text}>Settings</Text>
      </View>

      
      <View style={[styles.box, styles.redBackground]}>
        <Text style={styles.text}>Contacts</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  box: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: '#01008A',
    borderRadius: 30,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  purpleBackground: {
    backgroundColor: '#810081',
  },
  yellowBackground: {
    backgroundColor: '#fea501',
  },
  redBackground: {
    backgroundColor: '#fe0002',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default MainPage;
