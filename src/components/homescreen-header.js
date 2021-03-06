import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from "expo";

import { Fonts, Colors, Icons} from '../theme/constant-styles';

import UserActionButton from '../ui-elements/user-action-button';
import Check from '../ui-elements/check';

const HomeScreenHeader = (props) => {
  return (
    <View style={{ height: 100, position: 'absolute', top: 0, right: 0, left: 0, zIndex: 1000 }}>
      <BlurView tint="light" intensity={90} style={StyleSheet.absoluteFill}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 42, paddingRight: 16, paddingLeft: 16, }}>

          <UserActionButton
            onPress={props.leftButton}
            color={props.color}
            icon={props.icon
            }
            isIconLarge={false} />

          <Text style={[Fonts.HeadlineText, { color: Colors.PRIMARY }]}> {props.header} </Text>

          {(props.isCheckAnimationEnabled)
            ? <Check
              height={48}
              width={48} />
            : <UserActionButton
              onPress={props.rightButton}
              color={"white"}
              icon={Icons.LISTLY_CHECK}
              isIconLarge={true} />
          }
        </View>
      </BlurView>

    </View>
  )
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  }
});
