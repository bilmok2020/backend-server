/**
 * TODO: Server'a gelen requestlerde authentication'ı ve autherization'ı
 *  verify etmek için kullanılacak middleware yazılacak
 */

module.exports = (req, res, next) => {
    //Gelen http requestinin headerında bulunan Json WebToken decrypt edilecek.
    //Decrypt edildikten sonra elde edilen kullanıcı bilgilerinin
    // database'de olup olmadığı check edilecek.
    //Eğer yoksa request burada kesilerek devam client'a http 400 hatası döndürelecek
    //Eğer varsa req.user bu kullanıcı olarak tamınlanıcak ve next fonksiyonu ile request devam edecek.
    //Eğer kullanıcı admin ise adminlik derecesi req.admin değerine atanacak.
    next();
}