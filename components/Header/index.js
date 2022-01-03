import React from 'react-native';
import {View, Image} from 'react-native';

import styles from './style';

const Header = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/logo1.png')} />
        <Image style={styles.menu} source={require('../../assets/images/menu1.png')} />
        </View>
    );
};

export default Header;