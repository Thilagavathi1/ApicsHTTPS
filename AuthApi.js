import axios from 'axios';
import FetchApi from './FetchAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getEnvUrl = async () => {
  try {
    const baseUrl = await AsyncStorage.multiGet([
      '@baseurl',
      'username',
      'password',
    ]);
    return baseUrl;
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
};

export default class AuthApi {
  static axiosApiCall() {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          UserName: 'mau',
          Password: 'id',
        }),
      };

      return axios
        .post(
          `https://10.45.154.5/authenticate`,
          JSON.stringify({
            Username: 'mau',
            Password: 'id',
          }),
        )
        .then(response => {
          alert(JSON.stringify(response));

          return response;
        })
        .catch(error => {
          alert(error);
          alert(JSON.stringify(error));
        });
    });
    return responseval;
  }
  static login() {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          Username: 'mau',
          Password: 'id',
        }),
      };
      return FetchApi(`https://10.45.154.5/authenticate`, requestObj);
    });
    return responseval;
  }
  static loginHttp() {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          Username: 'mau',
          Password: 'id',
        }),
      };
      return FetchApi(`http://10.45.154.5/authenticate`, requestObj);
    });
    return responseval;
  }
  static kioskAPI() {
    let responseval = getEnvUrl().then(baseUrl => {
      const requestObj = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          username: 'APICS',
          password: 'aPics@2020',
        }),
      };
      return FetchApi(
        `https://10.45.154.30/ApicsAPI/APICS-DSS/api/token`,
        requestObj,
      );
    });
    return responseval;
  }
}
