import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	// component's initial base state (empty state)
	state = { albums: [] };

	// props vs state:
	// props is for parent to child communication
	// state is for a component's internal record keeping

	componentWillMount() {
		// componentWillMount is called the instant this component is about to load on the screen
		// console.log('componentWillMount in AlbumList');
		// in simulator, press cmd+D to debug JS remotely (see console in chrome)

		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			// this returns a promise, because a http request is inherently async
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			// <Text key={album.title}>{album.title}</Text>
			<AlbumDetail key={album.title} album={album} />
			// Now inside of AlbumDetail, we will have access to props.album
		);
	}

	render() {
		// console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
