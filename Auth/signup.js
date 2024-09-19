const poolData = {
    UserPoolId: 'YOUR_USER_POOL_ID', // Replace with your user pool id
    ClientId: 'YOUR_APP_CLIENT_ID'   // Replace with your app client id
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'email',
            Value: email
        })
    ];

    userPool.signUp(username, password, attributeList, null, function(err, result) {
        if (err) {
            document.getElementById('signup-message').textContent = 'Sign up failed: ' + err.message;
            return;
        }
        document.getElementById('signup-message').textContent = 'Sign up successful!';
    });
});
