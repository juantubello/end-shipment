/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fin_transporte/fin_transporte/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});