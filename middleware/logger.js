/**
 * TODO: Server'a gelen requestleri database'de tutmak için middleware yazılacak.
 */


module.exports = (req, res, next) => {
    // req'den request ile ilgili ip adresi zaman isteğin türü gibi bilgiler alınacak.
    //alınan bu bilgiler database'e loglanacak.
    //işlem bittikten sonra next fonksioynu ile diğer middleware veya router'lara geçiş yapılacak.
    next();
}