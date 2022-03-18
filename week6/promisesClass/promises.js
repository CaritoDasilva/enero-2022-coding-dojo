const isBreadAvailable = false;

const buyingBread = new Promise((resolve, reject) => {
    if(isBreadAvailable) {
        resolve('He traído pancito calentito');
    } else {
        const reason = new Error('Lo siento no había pan, hagamos panqueques');
        reject(reason);
    }
});

const goToBuyBread = () => {
    buyingBread.then(res => console.log(res))
    .catch(err => console.log(err));
    console.log('Pasé por acá');
};

// goToBuyBread();

//ES6

const goToBuyBreadWithAsyncAwait = async () => {
    try {
        const response = await buyingBread;
        console.log(`🚀 ${response}`);
        console.log('Pasé por acá');
    } catch(err) {
        console.log(`🚀 ${err}`);
    }
    
}

goToBuyBreadWithAsyncAwait();