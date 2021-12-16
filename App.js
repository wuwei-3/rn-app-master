/*
 * @Description: 百度
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-29 09:40:16
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-12-16 10:03:49
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render () {
    return (
      <View style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
        <WebView
          source={{ uri: 'https://wuwei.work/app-master/' }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}
