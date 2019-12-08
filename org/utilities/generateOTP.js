const randomStringGenerator = (length, type = "num") => {
    let result = '';
    const characters = type !== 'num' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' : '0123456789',
        charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


module.exports = {
    name: 'generateOTP',
    val: randomStringGenerator
}