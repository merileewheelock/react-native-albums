import React from 'react';
import { View, Text } from 'react-native';

// This component can just be a functional component because it is only showing data
// Don't need lifecycle methods or have state

const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{props.album.title}</Text>
		</View>
	);
};

export default AlbumDetail;
