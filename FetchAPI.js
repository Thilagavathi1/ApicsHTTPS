import {
  View,
  Text,
  Image,
  StatusBar,
  NativeModules,
  TouchableOpacity,
  Alert,
} from 'react-native';

const showAlert = (txt1, txt2) =>
  Alert.alert(
    txt1,
    txt2,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );

export default function FetchApi(url, reqObj) {
  console.log(url, 'url212');
  return fetch(url, reqObj)
    .then(function (res) {
      console.log(res, url, 'res,urlll');
      showAlert(url, 'success');
      return res.json();
    })
    .catch(err => {
      console.log(err, url, ' err,res,url');
      showAlert(url, err.message);
      // alert(err.message);
    });
}
