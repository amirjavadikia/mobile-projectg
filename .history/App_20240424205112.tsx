import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      
      <View style={[styles.blueBackground]}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  box: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  blueBackground: {
    backgroundColor: 'blue',
    borderRadius: 30,
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 10 0'
  },
  purpleBackground: {
    backgroundColor: 'purple',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  redBackground: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default MainPage;
