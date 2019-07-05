const {
    verifiedQrCodes,
    verifyQrCode
} = require('../../utils/verifyMissions');


test('Verifies qr codes correctly and returns their index', () => {

    for (let i = 0; i < verifiedQrCodes.length; i++) {
        let result = verifyQrCode(verifiedQrCodes[i]);
        expect(result).toBe(i);
    }

    let result = verifyQrCode("tihsisnotexistinverifiedqrcodes");
    expect(result).toBe(false);



});