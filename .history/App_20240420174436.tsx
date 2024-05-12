import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* لوگو */}
      <Text style={styles.logo}>Instagram</Text>
      {/* دکمه‌های اکشن */}
      <View style={styles.actions}>
        <TouchableOpacity>
          {/* دکمه جستجو */}
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* دکمه ارسال پیام */}
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* دکمه ساخت پست جدید */}
          <Text>New Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Post = ({ username, text, imageUrl }) => {
  return (
    <View style={styles.post}>
      {/* تصویر پروفایل */}
      <Text>{username}</Text>
      {/* نام کاربری */}
      <Text>{text}</Text>
      {/* متن پست */}
      <Image source={{ uri: imageUrl }} style={styles.postImage} />
      {/* تصویر پست */}
    </View>
  );
};

const postData = [
  { username: 'user1', text: 'Post 1', imageUrl: 'url1' },
  { username: 'user2', text: 'Post 2', imageUrl: 'url2' },
  // و غیره...
];

const Suggestions = () => {
  return (
    <View style={styles.suggestions}>
      <Text>Follow Suggestions:</Text>
      {/* لیست پیشنهادها */}
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
        {/* دکمه صفحه اصلی */}
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* دکمه جستجو */}
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* دکمه اعلان‌ها */}
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* دکمه حساب کاربری */}
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
