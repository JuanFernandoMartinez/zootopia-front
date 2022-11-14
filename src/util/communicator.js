async function postPrayer(url,obj){
    let res = await fetch(url,{
        method : "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body : JSON.stringify(obj)
    })

    let response = await res.json()

    return response
}

async function getPrayer(url){
    let res = await fetch(url)
    let response = await res.json()
    
    return response
}

export {postPrayer,getPrayer}