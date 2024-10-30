// api.js


// const API_KEY = process.env.API_KEY;
const userId = "usera6";

let conversation;

export const fetchData = async (message) => {
    try {
        console.log("userid", userId)
        const data = await fetch(`https://general-runtime.voiceflow.com/state/user/${userId}/interact`, {
            headers: { Authorization: "VF.DM.66b1e7d0584732822df02b45.qDXSPPcQepaC6iiB", 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({
                "request": {
                    "type": "text",
                    "payload": message
                }
            })
        });
        console.log("data u fetch pre json", data)
        const postRes = await data.json();
        console.log(postRes);
        return postRes;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getMemoryData = async () => {

    const optionsFetch = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "VF.DM.66b1e7d0584732822df02b45.qDXSPPcQepaC6iiB"
        }
    };

    try {
        const response = await fetch(`https://general-runtime.voiceflow.com/state/user/${userId}`, optionsFetch);
        const responseData = await response.json();
        console.log("u prvom get memory data ovo je response", responseData);
        if (Object.keys(responseData).length !== 0){
            console.log("response data nije prazan objekat");
            conversation=responseData.variables._memory_;
            return conversation;
        }
        else{
            console.log("response data je prazan objekat");
        }
        return null;

    } catch (err) {
        console.error(err);
        return null;
    }
};



