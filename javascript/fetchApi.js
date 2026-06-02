const API_KEY = "reqres_e50d308042ae40bab50487e598378dad";

const fetUserInfo = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2', {
            method: "GET",
            headers: {
                "x-api-key": API_KEY,   // API key added
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error('error data not found');
        }

        const UserData = await response.json();
        console.log(UserData);
    }

    catch (error) {
        console.log("eror: ", error)
    }
}


fetUserInfo();
