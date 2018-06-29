import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// This component can just be a functional component because it is only showing data
// Don't need lifecycle methods or have state

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<View></View>
				<View style={styles.headerContentStyle}>
					<Text>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default AlbumDetail;
