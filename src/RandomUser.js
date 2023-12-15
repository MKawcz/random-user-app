import React, { useState } from 'react';

function RandomUser () {
    const [userData, setUserData] = useState(null);

    async function fetchRandomUser() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUserData(data.results[0]);
            console.log(data);
        } catch(error) {
            console.error('Error fetching random user data', error);
        }
    };

    return (
        <div>
            <h1>Ktoś próbował się włamać na twoje konto Stepik</h1>
            <button onClick={fetchRandomUser}>Kliknij, aby dowiedzieć się kto</button>

            {userData && (
                <div>
                    <img src={userData.picture.large} alt="User picture" />
                    <p>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
                    <p>Nazwa użytkownika: {userData.login.username}</p>
                    <p>Numer telefonu: {userData.phone}</p>
                    <p>Adres email: {userData.email}</p>
                    <p>Lokalizacja: {`${userData.location.city}, ${userData.location.country}`}</p>
                </div>
            )}
        </div>
    );
};

export default RandomUser;