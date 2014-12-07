function fakeResolved(expectedResponse) {
    return {
        then: function(callback) {
            callback(expectedResponse);
        }
    };
}

function createValidationReplyObject() {
    return {
        additionalPhoneNumberMatch: undefined,
        faxNumberMatch: undefined,
        phoneNumberMatch: undefined,
        tollFreeNumberMatch: undefined,
        zipCodeMatch: undefined
    };
}

var I18N_JS_PATH = 'i18n/resources-default.js';
