/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';

import AuthApi from './AuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useContext} from 'react';

const App = () => {
  useEffect(() => {
    storeData();
  }, []);
  const storeData = async value => {
    try {
      const appUrl = await AsyncStorage.getItem('@baseurl');
      const items = [
        ['@baseurl', 'http://10.45.154.5'],
        ['username', 'mau'],
        ['password', 'id'],
      ];
      // const items = [
      //   ['@baseurl', 'http://demo.spritle.com:8082'],
      //   ['username', 'Admin'],
      //   ['password', 'P@ssw0rd'],
      // ];
      await AsyncStorage.multiSet(items);
    } catch (e) {
      alert(e);
    }
  };

  function kioskCall() {
    return AuthApi.kioskAPI().then(res => {
      alert(JSON.stringify(res));
    });
  }
  function onPressHttp() {
    return AuthApi.loginHttp().then(res => {
      alert(JSON.stringify(res));
    });
  }
  function fetchCall() {
    return AuthApi.login().then(res => {
      alert(JSON.stringify(res));
    });
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.fetchButton}>
        <View style={{flex: 0.5}}>
          <TouchableOpacity
            onPress={() => fetchCall()}
            style={[styles.buttonWrapper, {backgroundColor: 'orange'}]}>
            <Text style={{color: 'white'}}>HTTPS</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.5}}>
          <TouchableOpacity
            onPress={() => onPressHttp()}
            style={styles.buttonWrapper}>
            <Text style={{color: 'white'}}>http</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.1, marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => kioskCall()}
          style={[styles.buttonWrapper, {backgroundColor: 'purple'}]}>
          <Text style={{color: 'white'}}>Kiosk</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fetchButton: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonWrapper: {
    backgroundColor: 'violet',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5,
    margin: 5,
  },
});

export default App;
