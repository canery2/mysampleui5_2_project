sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/URLHelper"
], function (Controller, URLHelper) {
    "use strict";

    return Controller.extend("sample-app-copy.controller.App", {
        formatMail: function (sFirstName, sLastName) {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            return URLHelper.normalizeEmail(
                sFirstName + "." + sLastName + "@example.com",
                oBundle.getText("mailSubject", [sFirstName]),
                oBundle.getText("mailBody")
            );
        }
    });
});
