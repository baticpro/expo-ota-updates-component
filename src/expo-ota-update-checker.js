import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Updates} from 'expo';

export const UpdatesChecker = ({children}) => {
  const [isUploading, setUploading] = useState(false);

  const checkUpdates = async () => {
    const update = await Updates.checkForUpdateAsync();

    try {
      if (update.isAvailable) {
        setUploading(true);

        await Updates.fetchUpdateAsync();
        Updates.reloadFromCache();
      }
    } catch (e) {
      setUploading(false);
      console.log(e);

      Alert.alert('Warning!', 'something went wrong')
    }
  };

  useEffect(() => {
    checkUpdates()
  }, []);

  return (
    <View style={styles.root}>
      {children}

      {isUploading &&
      <View style={styles.overlay}>
        <ActivityIndicator size={'large'}/>
        <Text style={styles.text}>downloading update...</Text>
      </View>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center'
  }
});
