import {    reaction, 
    observable, 
    observe, 
    computed, 
    autorun, 
    action
} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
class MainStore {
    @observable formLogin = {
        'username':'',
        'password':''
    }
    @observable credentialsData = {
        'token': '',
        'iat': '',
        'exp': ''
    }
    // constructor() {
    //     reaction()
    // }
    @action updateUsername(username) {
        this.formLogin.username = username
        console.log('@action | Update Username | Username : ', this.formLogin.username)
    }
    @action updatePassword(password) {
        this.formLogin.password = password
        console.log('@action | Update Password | Password : ', this.formLogin.password)
    }
    @action updateCredentials(token, iat, exp) {
        this.credentialsData.token = token
        this.credentialsData.iat = iat
        this.credentialsData.exp = exp
        console.log('@action | Update Token | Token, IAT, EXP : ', 
        this.credentialsData.token, this.credentialsData.iat, this.credentialsData.exp)
    }
    
}
export default new MainStore()