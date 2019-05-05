
import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Animated, ImageBackground } from 'react-native';
import { Font, Asset } from 'expo';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';
import { Icons, Backgrounds } from './src/theme/constant-styles'

import MainReducer from './src/reducers/main-reducer';
import * as UserActionTypes from './src/action-types/user-action-types';
import AppNavigator from './src/navigation/app-navigator';
import Spinner from './src/components/spinner';

console.disableYellowBox = true;

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAppReady: false,
      isTimeDone: false,
    };

  }
  store = createStore(MainReducer, applyMiddleware(thunk));

  async componentDidMount() {
    this.animatedValue = new Animated.Value(0);

    await Promise.all([
      this._loadFontsAsync(),
      this._cacheResourcesAsync(),
      this.getCurrentNotes(),
      //this.clearAsyncStorage()
    ]);
    await setTimeout(() => {
      //console.log('FUCK IT!');
      this.setState({ isTimeDone: true });
    }, 1500);
    this.animination();
    this.setState({ isAppReady: true });
  }

  async _loadFontsAsync() {
    await Expo.Font.loadAsync({
      'fontReg': require('./assets/font/Montserrat.ttf'),
      'fontBold': require('./assets/font/Montserrat-Bold.ttf'),
    });
  }



  async _cacheResourcesAsync() {
    const images = [
      Backgrounds.PRIMARY,
      Backgrounds.SECONDARY,
      Backgrounds.GREEN,
      Backgrounds.BUBBLES,
      Backgrounds.BUBBLES_2,
      require("./assets/icons/AddFinished.png"),
      require("./assets/icons/DeleteFinal.png"),
      require("./assets/icons/RightArrow-purp.png"),
      require("./assets/icons/default-user-pic.png"),
      require("./assets/icons/check-icon.png"),
      require("./assets/icons/back-icon.png"),
      require("./assets/icons/checkmark.png"),
      require("./assets/icons/checkmark-white.png"),
      require("./assets/icons/back-icon-white.png"),
      require("./assets/animat-checkmark.gif"),
    ];
    // Asset.loadAsync takes an array and this way we can load the images in parallel
    await Asset.loadAsync(images);
  }
  getCurrentNotes = async () => {
    //gets current Notes from local device storage
    try {
      const currentNotes = await AsyncStorage.getItem('currentNotes');
      if (currentNotes !== null) {
        let parsedData = JSON.parse(currentNotes)
        parsedData.map(card => {
          this.store.dispatch({
            type: UserActionTypes.SET_CARD,
            cards: card
          })
        })
      }
      else {
        console.log('Current No Data Saved')
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  }
  animination() {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 1000,
    }).start()

  }

  render() {
    if (this.state.isAppReady === true && this.state.isTimeDone === true) {
      return (
        <Provider store={this.store}>
          <AppNavigator />
        </Provider>
      );
    }
    return (
      <ImageBackground
        source={Backgrounds.PRIMARY}
        style={styles.containerLoad}
      >
        <Animated.View>
          <Spinner />
        </Animated.View>
      </ImageBackground>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLoad: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    padding: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
