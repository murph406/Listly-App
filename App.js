import React, { Component} from 'react';
import { StyleSheet, Text, View, Animated, ImageBackground } from 'react-native';
import { Font, Asset } from 'expo';
import TimerMixin from 'react-timer-mixin';

import AppNavigator from './src/screens/app-navigator';
import Spinner from './src/components/spinner';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      isAppReady: false,
      isTimeDone: false, 
    };
  }
  
  async componentDidMount() { 
    this.animatedValue = new Animated.Value(0);
    await Promise.all([
      this._loadFontsAsync(),
      this._cacheResourcesAsync(),
    ]);
    await setTimeout(() => {
      console.log('FUCK IT!');
      this.setState({ isTimeDone: true });
    }, 3500);
    this.animination();
    this.setState({ isAppReady: true });
    }  
   
    async _loadFontsAsync() {
      await Expo.Font.loadAsync({
        'fontReg': require('./assets/font/RobotoCondensed-Regular.ttf'),
        'fontBold': require('./assets/font/RobotoCondensed-Bold.ttf'),
        'fontLight': require('./assets/font/RobotoCondensed-Light.ttf'),
      });
    }

    async _cacheResourcesAsync() {
      const images = [
        require("./assets/drawing.png"),
        require("./assets/drawing2.png"), 
        require("./assets/icons/AddFinished.png"),
        require("./assets/icons/DeleteFinal.png"),  
        require("./assets/icons/RightArrow-purp.png"),  
      ];
      // Asset.loadAsync takes an array and this way we can load the images in parallel
      await Asset.loadAsync(images);
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
          <AppNavigator/>
        );
      }
      return (
        <ImageBackground
          source={require('./assets/drawing.png')}
          style={styles.containerLoad}
        >
        <Animated.View>
          <Spinner/>
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
