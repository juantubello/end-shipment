/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fin_transporte/fin_transporte/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});