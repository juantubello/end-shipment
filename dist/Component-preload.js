//@ui5-bundle fin_transporte/fin_transporte/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"fin_transporte/fin_transporte/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","fin_transporte/fin_transporte/model/models"],function(e,t,i){"use strict";return e.extend("fin_transporte.fin_transporte.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"fin_transporte/fin_transporte/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";var a="/sap/opu/odata/sap/ZSD_AMCR_FINTRANSP_SRV/";function r(e,t){var a=e.byId("Header");a.setTitle(t.Exti1.toUpperCase());a.setSubtitle(t.Exti2.toUpperCase());e.byId("carrier").setText(t.Tdlnr.toUpperCase());e.byId("truckPlate").setText(t.Signi.toUpperCase());e.byId("semiPlate").setText(t.Tpbez.toUpperCase());e.byId("executionDate").setText(t.Daten);e.byId("executionHour").setText(t.Uaten)}function s(e,t){var a=e.byId("Header");a.setTitle("");a.setSubtitle("");e.byId("carrier").setText("");e.byId("truckPlate").setText("");e.byId("semiPlate").setText("");e.byId("executionDate").setText("");e.byId("executionHour").setText("")}function o(e,t){e.byId("btnEnd").setVisible(t);e.byId("endLabel").setVisible(t)}function n(e,a,n,i){n.read("/transporteSet(Tknum='"+a+"')",{success:function(a){if(a.Error==="01"){o(e,false);s(e,a);t.show("No existe el transporte")}else{r(e,a);if(a.Daten!==""&&a.Uaten!==""){o(e,false);if(!i){t.show("El transporte ya cuenta con FIN")}}else{o(e,true)}}},error:function(e){t.show("Error obteniendo datos de transportes")}})}function i(e,a,r){var s=true;r.read("/finSet(Transporte='"+a+"')",{success:function(o){if(o.Error==="01"){t.show("Error actualizando transporte")}else{t.show("Transporte actualizado correctamente");n(e,a,r,s)}},error:function(e){t.show("Error actualizando transporte")}})}return e.extend("fin_transporte.fin_transporte.controller.View1",{onInit:function(){var e=this.getView();o(e,false)},onSearch:function(e){if(!e.getParameters().clearButtonPressed){var t=this.getView();var r=this.byId("searchShipment").getValue();var s=false;var o=new sap.ui.model.odata.ODataModel(a,{json:true,loadMetadataAsync:true});n(t,r,o,s)}},onPress:function(){var e=this.getView();var r=this.byId("searchShipment").getValue();var s=new sap.ui.model.odata.ODataModel(a,{json:true,loadMetadataAsync:true});if(r===""){t.show("Transporte vacio");o(e,false)}else{i(e,r,s)}}})});
},
	"fin_transporte/fin_transporte/i18n/i18n.properties":'title=FIN DE TRANSPORTE\nappTitle=fin_transporte\nappDescription=App Description\ntransportista=TRANSPORTISTA\nchapaCamion=CHAPA CAMION\nchapaSemi=CHAPA SEMI\nnombre=NOMBRE CHOFER\ndni= DNI CHOFER\nfechaEjecucion=FECHA EJECUCION\nhoraEjecucion=HORA EJECUCION\nfin=FIN TRANSPORTE',
	"fin_transporte/fin_transporte/localService/metadata.xml":'<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"\n\txmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData" Version="1.0"><edmx:DataServices m:DataServiceVersion="2.0"><Schema xmlns="http://schemas.microsoft.com/ado/2008/09/edm" Namespace="ZSD_AMCR_FINTRANSP_SRV" xml:lang="en" sap:schema-version="1"><EntityType Name="transporte" sap:content-version="1"><Key><PropertyRef Name="Tknum"/></Key><Property Name="Tknum" Type="Edm.String" Nullable="false" MaxLength="10" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Tdlnr" Type="Edm.String" Nullable="false" MaxLength="10" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Error" Type="Edm.String" Nullable="false" MaxLength="2" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Signi" Type="Edm.String" Nullable="false" MaxLength="20" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Tpbez" Type="Edm.String" Nullable="false" MaxLength="20" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Exti1" Type="Edm.String" Nullable="false" MaxLength="20" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Exti2" Type="Edm.String" Nullable="false" MaxLength="20" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Daten" Type="Edm.DateTime" Nullable="false" Precision="7" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Uaten" Type="Edm.Time" Nullable="false" Precision="0" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Sttrg" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/></EntityType><EntityType Name="fin" sap:content-version="1"><Key><PropertyRef Name="Transporte"/></Key><Property Name="Transporte" Type="Edm.String" Nullable="false" MaxLength="10" sap:unicode="false" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Error" Type="Edm.String" Nullable="false" MaxLength="2" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/></EntityType><EntityContainer Name="ZSD_AMCR_FINTRANSP_SRV_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx"><EntitySet Name="transporteSet" EntityType="ZSD_AMCR_FINTRANSP_SRV.transporte" sap:creatable="false" sap:updatable="false"\n\t\t\t\tsap:deletable="false" sap:pageable="false" sap:content-version="1"/><EntitySet Name="finSet" EntityType="ZSD_AMCR_FINTRANSP_SRV.fin" sap:creatable="false" sap:updatable="false" sap:deletable="false"\n\t\t\t\tsap:pageable="false" sap:content-version="1"/></EntityContainer><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="self" href="./sap/ZSD_AMCR_FINTRANSP_SRV/$metadata"/><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="latest-version" href="./sap/ZSD_AMCR_FINTRANSP_SRV/$metadata"/></Schema></edmx:DataServices></edmx:Edmx>',
	"fin_transporte/fin_transporte/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"fin_transporte.fin_transporte","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{"ZSD_AMCR_FINTRANSP_SRV":{"uri":"/sap/opu/odata/sap/ZSD_AMCR_FINTRANSP_SRV/","type":"OData","settings":{"localUri":"localService/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"fin_transporte.fin_transporte.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"fin_transporte.fin_transporte.i18n.i18n"}},"":{"type":"sap.ui.model.odata.v2.ODataModel","settings":{"defaultOperationMode":"Server","defaultBindingMode":"OneWay","defaultCountMode":"Request"},"dataSource":"ZSD_AMCR_FINTRANSP_SRV","preload":true}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"fin_transporte.fin_transporte.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"},"sap.platform.abap":{"uri":"/sap/bc/ui5_ui5/sap/zfintransporte/webapp","_version":"1.1.0"}}',
	"fin_transporte/fin_transporte/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"fin_transporte/fin_transporte/serviceBinding.js":'function initModel(){var a="/sap/opu/odata/sap/ZSD_AMCR_FINTRANSP_SRV/";var e=new sap.ui.model.odata.ODataModel(a,true);sap.ui.getCore().setModel(e)}',
	"fin_transporte/fin_transporte/view/View1.view.xml":'<mvc:View controllerName="fin_transporte.fin_transporte.controller.View1" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"\n\tdisplayBlock="true" xmlns="sap.m" xmlns:l="sap.ui.layout" xmlns:f="sap.f" xmlns:card="sap.f.cards"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><l:VerticalLayout class="sapUiContentPadding" width="100%"><Label class="title" text="INGRESE N° DE TRANSPORTE" labelFor="input-a"/><SearchField maxLength="10" id="searchShipment" search="onSearch" placeholder="Buscar "><layoutData><OverflowToolbarLayoutData maxWidth="300px" shrinkable="true" priority="NeverOverflow"/></layoutData></SearchField><f:Card><f:layoutData><f:GridContainerItemLayoutData columns="4"/></f:layoutData><f:header><card:Header id ="Header" class="haeadOut" title="" subtitle="" iconSrc="sap-icon://employee" press="onPress"/></f:header><f:content><VBox class="outputData" renderType="Bare" justifyContent="SpaceBetween"><HBox justifyContent="SpaceBetween"><ObjectStatus id="carrier" class="itemsList" title="{i18n>transportista}" text="" active="true" state="Information"\n\t\t\t\t\t\t\t\t\t\t\t\tpress="handleStatusPressed"/></HBox><HBox justifyContent="SpaceBetween"><ObjectStatus id="truckPlate" class="itemsList" title="{i18n>chapaCamion}" text="" active="true" state="Information"\n\t\t\t\t\t\t\t\t\t\t\t\tpress="handleStatusPressed"/></HBox><HBox justifyContent="SpaceBetween"><ObjectStatus id="semiPlate" class="itemsList" title="{i18n>chapaSemi}" text="" active="true" state="Information"\n\t\t\t\t\t\t\t\t\t\t\t\tpress="handleStatusPressed"/></HBox><HBox justifyContent="SpaceBetween"><ObjectStatus id="executionDate" class="itemsList" title="{i18n>fechaEjecucion}" text="" active="true" state="Information"\n\t\t\t\t\t\t\t\t\t\t\t\tpress="handleStatusPressed"/></HBox><HBox justifyContent="SpaceBetween"><ObjectStatus id="executionHour" class="itemsList" title="{i18n>horaEjecucion}" text="" active="true" state="Information"\n\t\t\t\t\t\t\t\t\t\t\t\tpress="handleStatusPressed"/></HBox></VBox></f:content></f:Card><Label id ="endLabel" class="title" text="ACTUALIZAR TRANSPORTE" labelFor="input-b"/><Button id="btnEnd" class="btnEnd" type="Accept" text="Fin de transporte" icon="sap-icon://bus-public-transport" press="onPress" ariaDescribedBy="accept" width="100%"><layoutData><FlexItemData growFactor="1"/></layoutData></Button></l:VerticalLayout></content></Page></pages></App></Shell></mvc:View>'
}});
