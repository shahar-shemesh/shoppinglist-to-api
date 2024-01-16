export async function postOrderToDB(order){
    console.log(order);
    const response = await fetch('https://localhost:7251/api/Orders', {
        method: "POST",
        mode: "cors",
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer",
        body: JSON.stringify(order), 
      });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Faild to fetch user places.')
    }

    return resData.message;
};