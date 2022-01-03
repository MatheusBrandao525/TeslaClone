import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 30,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 25,
        resizeMode: 'contain',
    },
    menu: {
        width: 30,
        height: 30,
    },
});

export default styles;