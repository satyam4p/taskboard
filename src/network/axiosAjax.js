import axios from 'axios';

import axiosConfig from './axiosConfig';

const ClientJS  = window.ClientJS

let client;
let payload;


window.addEventListener('load',()=>{
    client = new ClientJS();
    let clientData = {
        '13': {
            '11': Date.now(),
            '16': client.getUserAgent() || '',
            '19': client.getTimeZone() || '',
            '7': client.getFingerprint() || '',
            '5': client.getLanguage() || '',
            '20': client.getSystemLanguage() || '',
            '27': client.getBrowser() || '',
            '21': client.getBrowserVersion() || '',
            '8': client.getEngine() || '',
            '23': client.getEngineVersion() || '',
            '18': client.getOS() || '',
            '25': client.getOSVersion() || '',
            '10': window.screen.width,
            '24': window.screen.height,
            '2': client.getDeviceXDPI() || '',
            '26': client.getDeviceYDPI() || '',
            '13': client.getColorDepth() || '',
            '15': client.isJava(),
            '17': client.getJavaVersion() || '',
            '30': client.isFlash(),
            '12': client.getFlashVersion() || '',
            '29': client.isSilverlight(),
            '6': client.getSilverlightVersion() || '',
            '9': client.isMimeTypes(),
            '4': client.getMimeTypes() || '',
            '1': client.getFonts() || '',
            '3': client.isLocalStorage(),
            '14': client.isSessionStorage(),
            '22': client.isCookie(),
            '28': client.getPlugins() || '',
            '31': client.isMobile(),
          },
    }

    payload = btoa(JSON.stringify(clientData));
})

class AxiosAjax {

    constructor(options){

        this.options = options || axiosConfig || {};

        this.http = axios.create(this.options);

    }

    makeRequest=(url, method, params, body )=>{
        this.url = url;
        this.method = method.toLowerCase();
        this.params = params;
        this.body = body || {}

        let request = this.http({
            method: this.method,
            url: this.url,
            params: this.params,
            data: this.data
        });

        return request;
    }
}

module.exports = AxiosAjax;