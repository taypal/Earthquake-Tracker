import auth0 from 'auth0-js';

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: 'dev-i2s5lit7.auth0.com',
            audience: 'https://dev-i2s5lit7.auth0.com/userinfo',
            clientID: 'a4SGun9H6paF301SbZIVK6OgqSvTExzK',
            redirectUri: window.location.origin,
            responseType: 'id_token',
            scope: 'openid profile',
        });


        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    getProfile() {
        return this.profile;
    }

    getIdToken() {
        return this.idToken;
    }

    isAuthenticated() {
        return new Date().getTime() < this.expiresAt;
    }

    signIn() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        console.log("triggered")
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    console.log(err)
                    return reject(err);

                }
                console.log(authResult)
                this.setSession(authResult);
                resolve();
                console.log("authenticated")
            });
        })
    }

    setSession(authResult) {
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
    }

    signOut() {
        this.auth0.logout({
            returnTo: window.location.origin,
            clientID: 'a4SGun9H6paF301SbZIVK6OgqSvTExzK',
        });
    }

    silentAuth() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);
                this.setSession(authResult);
                resolve();
            });
        });
    }
}
const auth0Client = new Auth();


export default auth0Client;