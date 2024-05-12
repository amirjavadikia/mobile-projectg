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
  },
  box: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  blueBackground: {
    backgroundColor: 'blue',
    borderRadius: 30,
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
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
