const URL = 'http://localhost:3000';

export async function getToken(loginInfo, type) {
    // type is either 'signin' or 'signup'
    // user shape is { email: 'bart@fakestreet.com', password: '1234' }
    const authURL = `${URL}/auth/${type}`; // http://localhost:3000/auth/signup or http://localhost:3000/auth/signin

    // POST to /signin or /signup
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });

    const data = await resp.json();
    console.log(data);

    // set the token to local storage
    localStorage.setItem('TOKEN', data.token);

    // return the userid
    return data.token;
}