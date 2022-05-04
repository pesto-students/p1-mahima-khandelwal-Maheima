const getNumber = () =>{
    new Promise((res,rej) => {
        const randomNum = parseInt(Math.random() * 100 , 10);
        setTimeout(() => {
            if (randomNum % 5 === 0) {
                rej(`Rejected with num ${randomNum}`)
            }
            res(`Resolved with num ${randomNum}`)
            
        }, randomNum * 10)
    })
}

const x = getNumber()
x.then()