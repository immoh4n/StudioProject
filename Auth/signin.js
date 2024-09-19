const poolData = {
    UserPoolId: 'YOUR_USER_POOL_ID', // Replace with your user pool id
    ClientId: 'YOUR_APP_CLIENT_ID'   // Replace with your app client id
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const authenticationData = {
        Username: username,
        Password: password
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const userData = {
        Username: username,
        Pool: userPool
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            document.getElementById('signin-message').textContent = 'Sign in successful!';
            console.log('Access Token + ' + result.getAccessToken().getJwtToken());
        },
        onFailure: function(err) {
            document.getElementById('signin-message').textContent = 'Sign in failed: ' + err.message;
        }
    });
});
