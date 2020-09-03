import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { getDatabase, fromMenuItemToDBKey } from '../model/data';

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },

    image: {
        height: 300,
        width: 350,
    },

    name: {
        paddingLeft: 22
    },

    text: {
        textAlign: "left",
        fontSize: 16,
        fontWeight:"bold"
    }
});

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rating: props.item.rating, rated: false };
    }

    onFinishRating = (x) => {
        if (this.state.rating === 0) {
            this.props.item.numRatings++;
            this.props.item.rating = ((this.props.item.numRatings - 1) * this.props.item.rating + x) / this.props.item.numRatings;
            this.setState({ rating: x, rated: true });
        } else if (this.state.rating === x && this.state.rated) {
            if (this.props.item.numRatings !== 1) {
                this.props.item.rating = (this.props.item.numRatings * this.props.item.rating - x) / (this.props.item.numRatings - 1);
            } else {
                this.props.item.rating = 0;
            }
            this.props.item.numRatings--;
            x = 0;
            this.setState({ rating: 0, rated: false });
        } else {
            this.props.item.numRatings++;
            this.props.item.rating = (this.props.item.numRatings * this.props.item.rating - this.state.rating + x) / this.props.item.numRatings;
            this.setState({ rating: x, rated: true });
        }
        getDatabase().ref(`menus/${fromMenuItemToDBKey(this.props.item)}`).set(this.props.item);
    }

    render = () => {
        const props = this.props;
        return (
            <View style={{ marginBottom: 50 }}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: props.img }} style={styles.image}></Image>
                </View>
                <View style={styles.name}>
                    <Text style={styles.text}>{props.item.name}</Text>
                </View>
                <View>
                    <AirbnbRating size={25} showRating={false} defaultRating={this.state.rating}
                        onFinishRating={this.onFinishRating} />
                </View>
            </View >
        );
    }
}