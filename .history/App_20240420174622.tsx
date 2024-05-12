import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// داده‌های مثالی برای نمونه
const postData = [
  { username: 'user1', text: 'Post 1', imageUrl: 'url1' },
  { username: 'user2', text: 'Post 2', imageUrl: 'url2' },
  // و غیره...
];

const suggestionData = [
  { username: 'suggestion1' },
  { username: 'suggestion2' },
  // و غیره...
];

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>New Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Post = ({ username, text, imageUrl }) => {
  return (
    <View style={styles.post}>
      <Text>{username}</Text>
      <Text>{text}</Text>
      <Image source={{uri: imageUrl}} style={styles.postImage} />
    </View>
  );
};

const Suggestions = () => {
  return (
    <View style={styles.suggestions}>
      <Text>Follow Suggestions:</Text>
      <FlatList
        data={suggestionData}
        renderItem={({ item }) => <Text>{item.username}</Text>}
      />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={postData}
        renderItem={({ item }) => <Post username={item.username} text={item.text} imageUrl={item.imageUrl} />}
      />
      <Suggestions />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  suggestions: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    width: '100%',
  },
});

export default App;
