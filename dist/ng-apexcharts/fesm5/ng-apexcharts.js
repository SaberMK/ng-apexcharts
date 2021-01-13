import { __decorate, __spread } from 'tslib';
import { Input, ViewChild, Component, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import * as ApexCharts from 'apexcharts';

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.autoUpdateSeries = true;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            _this.createElement();
        });
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (_this.autoUpdateSeries &&
                Object.keys(changes).filter(function (c) { return c !== "series"; }).length === 0) {
                _this.updateSeries(_this.series, true);
                return;
            }
            _this.createElement();
        });
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    };
    ChartComponent.prototype.createElement = function () {
        var options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        this.render();
    };
    ChartComponent.prototype.render = function () {
        return this.chartObj.render();
    };
    ChartComponent.prototype.updateOptions = function (options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    };
    ChartComponent.prototype.updateSeries = function (newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    };
    ChartComponent.prototype.appendSeries = function (newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    };
    ChartComponent.prototype.appendData = function (newData) {
        this.chartObj.appendData(newData);
    };
    ChartComponent.prototype.toggleSeries = function (seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    };
    ChartComponent.prototype.showSeries = function (seriesName) {
        this.chartObj.showSeries(seriesName);
    };
    ChartComponent.prototype.hideSeries = function (seriesName) {
        this.chartObj.hideSeries(seriesName);
    };
    ChartComponent.prototype.resetSeries = function () {
        this.chartObj.resetSeries();
    };
    ChartComponent.prototype.zoomX = function (min, max) {
        this.chartObj.zoomX(min, max);
    };
    ChartComponent.prototype.toggleDataPointSelection = function (seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    };
    ChartComponent.prototype.destroy = function () {
        this.chartObj.destroy();
    };
    ChartComponent.prototype.setLocale = function (localeName) {
        this.chartObj.setLocale(localeName);
    };
    ChartComponent.prototype.paper = function () {
        this.chartObj.paper();
    };
    ChartComponent.prototype.addXaxisAnnotation = function (options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    };
    ChartComponent.prototype.addYaxisAnnotation = function (options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    };
    ChartComponent.prototype.addPointAnnotation = function (options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    };
    ChartComponent.prototype.removeAnnotation = function (id, options) {
        this.chartObj.removeAnnotation(id, options);
    };
    ChartComponent.prototype.clearAnnotations = function (options) {
        this.chartObj.clearAnnotations(options);
    };
    ChartComponent.prototype.dataURI = function () {
        return this.chartObj.dataURI();
    };
    __decorate([
        Input()
    ], ChartComponent.prototype, "chart", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "annotations", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "colors", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "dataLabels", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "series", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "stroke", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "labels", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "legend", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "markers", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "noData", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "fill", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "tooltip", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "plotOptions", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "responsive", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "xaxis", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "yaxis", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "grid", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "states", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "theme", void 0);
    __decorate([
        Input()
    ], ChartComponent.prototype, "autoUpdateSeries", void 0);
    __decorate([
        ViewChild("chart", { static: true })
    ], ChartComponent.prototype, "chartElement", void 0);
    ChartComponent = __decorate([
        Component({
            selector: "apx-chart",
            template: "<div #chart></div>\r\n",
            styles: [""]
        })
    ], ChartComponent);
    return ChartComponent;
}());

if (window) {
    window.ApexCharts = ApexCharts;
}
var declerations = [ChartComponent];
var NgApexchartsModule = /** @class */ (function () {
    function NgApexchartsModule() {
    }
    NgApexchartsModule = __decorate([
        NgModule({
            declarations: __spread(declerations),
            imports: [],
            exports: __spread(declerations),
        })
    ], NgApexchartsModule);
    return NgApexchartsModule;
}());

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, NgApexchartsModule };
//# sourceMappingURL=ng-apexcharts.js.map
