import React, {Component} from 'react';
import { View, Text } from  "react-native";

import { styles } from "./styles";
import * as themes from "../../themes";

export default class HomeDetail extends Component{
  render() {
    return (
        <View style={[themes.flex, styles.container]}>
            <Text>HomeDetail</Text>
        </View>
    );
  }
}
