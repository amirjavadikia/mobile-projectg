import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // برای آیکون‌ها

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* باکس اول */}
      <View style={[styles.box, styles.blueBackground]}>
        <Text style={styles.text}>Welcome to my app!</Text>
      </View>
      
      {/* باکس دوم */}
      <View style={[styles.box, styles.purpleBackground]}>
        <Ionicons name="location" size={24} color="white" />
        <Text style={styles.text}>Location</Text>
      </View>

      {/* باکس سوم */}
      <View style={[styles.box, styles.yellowBackground]}>
        <Ionicons name="settings" size={24} color="white" />
        <Text style={styles.text}>Settings</Text>
      </View>

      {/* باکس چهارم */}
      <View style={[styles.box, styles.redBackground]}>
        <Ionicons name="contacts" size={24} color="white" />
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
    width: '80%',
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  blueBackground: {
    backgroundColor: 'blue',
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
