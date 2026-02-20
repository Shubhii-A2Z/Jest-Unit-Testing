const crypto =require('crypto');

async function getData() {
    const res=await crypto.randomBytes(20);
    return res;
}

getData();

module.exports={
    getData,
};