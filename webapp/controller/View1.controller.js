sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, Mt) {
	"use strict";

	var url = "/sap/opu/odata/sap/ZSD_AMCR_FINTRANSP_SRV/";

	function shipmentExists(vista, data) {
		var header = vista.byId("Header");
		header.setTitle(data.Exti1.toUpperCase());
		header.setSubtitle(data.Exti2.toUpperCase());
		vista.byId("carrier").setText((data.Tdlnr).toUpperCase());
		vista.byId("truckPlate").setText((data.Signi).toUpperCase());
		vista.byId("semiPlate").setText(data.Tpbez.toUpperCase());
		vista.byId("executionDate").setText(data.Daten);
		vista.byId("executionHour").setText(data.Uaten);
	}

	function shipmentNoExists(vista, data) {
		var header = vista.byId("Header");
		header.setTitle("");
		header.setSubtitle("");
		vista.byId("carrier").setText("");
		vista.byId("truckPlate").setText("");
		vista.byId("semiPlate").setText("");
		vista.byId("executionDate").setText("");
		vista.byId("executionHour").setText("");
	}
	
	function unHideEndShipment(view, bol) {
		view.byId("btnEnd").setVisible(bol);
		view.byId("endLabel").setVisible(bol);
	}
	
	function searchShipment(view, shipment, model, flag) {
		model.read("/transporteSet(Tknum='" + shipment + "')", {
			success: function (oData) {
				if (oData.Error === "01") {
					unHideEndShipment(view, false);
					shipmentNoExists(view, oData);
					Mt.show("No existe el transporte");
				} else {
					shipmentExists(view, oData);
					if (oData.Daten !== "" && oData.Uaten !== "") {
						unHideEndShipment(view, false);
						if (!flag) {
							Mt.show("El transporte ya cuenta con FIN");
						}
					} else {
						unHideEndShipment(view, true);
					}
				}
			},
			error: function (err) {
				Mt.show("Error obteniendo datos de transportes");
			}
		});
	}
	
	function updateShipment(view, shipment, model) {
		var flag = true;
		model.read("/finSet(Transporte='" + shipment + "')", {
			success: function (oData) {
				if (oData.Error === "01") {
					Mt.show("Error actualizando transporte");
				} else {
					Mt.show("Transporte actualizado correctamente");
					searchShipment(view, shipment, model, flag);
				}
			},
			error: function (err) {
				Mt.show("Error actualizando transporte");
			}
		});
	}
	return Controller.extend("fin_transporte.fin_transporte.controller.View1", {
		onInit: function () {
			var view = this.getView();
			unHideEndShipment(view, false);
		},
		onSearch: function (oEvent) {
			if (!(oEvent.getParameters().clearButtonPressed)) {
				var view = this.getView();
				var transporte = this.byId("searchShipment").getValue();
				var flag = false;
				var oModel = new sap.ui.model.odata.ODataModel(url, {
					json: true,
					loadMetadataAsync: true
				});
				searchShipment(view, transporte, oModel, flag);
			}
		},
		onPress: function () {
			var view = this.getView();
			var transporte = this.byId("searchShipment").getValue();
			var oModel = new sap.ui.model.odata.ODataModel(url, {
				json: true,
				loadMetadataAsync: true
			});
			if (transporte === "") {
				Mt.show("Transporte vacio");
				unHideEndShipment(view, false);
			} else {
				updateShipment(view, transporte, oModel);
			}
		}
	});
});