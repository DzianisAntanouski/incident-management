sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/gantt/misc/Format"
], function (Controller, JSONModel, Format) {
	"use strict";

	return {
		fnTimeConverter: function (sTimestamp) {
			const dDate = sTimestamp.toString().includes('2020') ? new Date(sTimestamp.toString().replace('2020', '2021')) : new Date(sTimestamp.toString().replace('2021', '2022'))
			return dDate
			/* // sTimestamp has new Date format
			return Format.abapTimestampToDate(sTimestamp); */
		}
	};
});