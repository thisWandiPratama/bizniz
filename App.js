import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

    const loading = () => <ActivityIndicator 
        color="blue"
        size="large"
        style={styles.loading}
    />

    return (
        <WebView
            source={{uri: `https://www.berkahds.com`}}
            startInLoadingState
            renderLoading={loading}
        />
    )
}

export default App;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
})