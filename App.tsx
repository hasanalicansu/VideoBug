import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return <VideoPlayer />;
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

import Video from 'react-native-video';

const VideoPlayer = () => {
  const [showVideo, setShowVideo] = React.useState(true);
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      {showVideo && (
        <FlatList
          data={[
            'https://www.ikea.com/pvid/0774521_fe000083.mp4',
            'https://www.ikea.com/pvid/0774521_fe000083.mp4',
          ]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').width,
                }}>
                <Video
                  resizeMode="contain"
                  ignoreSilentSwitch={'obey'}
                  controls
                  volume={0}
                  style={styles.videoStyle}
                  source={{
                    uri: item,
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(__, index) => index.toString()}
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          pagingEnabled
          decelerationRate="normal"
          disableIntervalMomentum
        />
      )}
      <Pressable
        style={styles.buttonStyle}
        onPress={() => setShowVideo(!showVideo)}>
        <Text>Toggle Video</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'orange',
    flex: 1,
  },
  videoStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'gray',
  },
  buttonStyle: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
