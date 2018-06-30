// Index.ios.js - place code in here for iOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// Only getting the Text and AppRegistry properties from the ReactNative library
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component (one component per file)
//Since we are using ScrollView (in AlbumList), we need flex: 1 at the root View
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// Render it to the device
// For each ReactNative application we create, we must register at least one component
AppRegistry.registerComponent('albums', () => App);
