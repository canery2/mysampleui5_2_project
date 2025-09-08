/* eslint-disable no-unused-vars */
sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"sample-app/controller/HelloDialog",
		"sap/ui/Device",
	],
	function (UIComponent, JSONModel, HelloDialog, Device) {
		"use strict";
		return UIComponent.extend("sample-app.Component", {
			metadata: {
				manifest: "json",
			},
			init: function () {
				// call the init function of the parent
			}
		});
	}
);
