function FetchLoginAuth(email, password){ 
    const res = fetch(
        "/signin",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
    return res;        
}

export default FetchLoginAuth