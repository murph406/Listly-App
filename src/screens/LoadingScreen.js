import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
} from 'react-native';
import Spinner from '../components/spinner';
import * as firebase from 'firebase';
import fire from '../api/firebase'


class LoadScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this._authListener()
    }


     _authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user)
          if (user) {
            this.setState({user: user})
            this.props.navigation.navigate('home')
          } else {
            this.setState({ user: null })
            this.props.navigation.navigate('login')
          }
        })
      }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing.png')}
                style={styles.container}>
               <Spinner />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        padding: 16,
        paddingTop: 90,
    },
});

export default LoadScreen;