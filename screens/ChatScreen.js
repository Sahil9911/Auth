import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

const styles = StyleSheet.create({});

export default ChatScreen;