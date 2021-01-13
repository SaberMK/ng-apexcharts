import { __decorate } from 'tslib';
import { Input, ViewChild, Component, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import * as ApexCharts from 'apexcharts';

let ChartComponent = class ChartComponent {
    constructor() {
        this.autoUpdateSeries = true;
    }
    ngOnInit() {
        asapScheduler.schedule(() => {
            this.createElement();
        });
    }
    ngOnChanges(changes) {
        asapScheduler.schedule(() => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((c) => c !== "series").length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        });
    }
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
        const options = {};
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
    }
    render() {
        return this.chartObj.render();
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    updateSeries(newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    }
    appendSeries(newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    }
    appendData(newData) {
        this.chartObj.appendData(newData);
    }
    toggleSeries(seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    }
    showSeries(seriesName) {
        this.chartObj.showSeries(seriesName);
    }
    hideSeries(seriesName) {
        this.chartObj.hideSeries(seriesName);
    }
    resetSeries() {
        this.chartObj.resetSeries();
    }
    zoomX(min, max) {
        this.chartObj.zoomX(min, max);
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    destroy() {
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        this.chartObj.setLocale(localeName);
    }
    paper() {
        this.chartObj.paper();
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    addPointAnnotation(options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    removeAnnotation(id, options) {
        this.chartObj.removeAnnotation(id, options);
    }
    clearAnnotations(options) {
        this.chartObj.clearAnnotations(options);
    }
    dataURI() {
        return this.chartObj.dataURI();
    }
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

if (window) {
    window.ApexCharts = ApexCharts;
}
const declerations = [ChartComponent];
let NgApexchartsModule = class NgApexchartsModule {
};
NgApexchartsModule = __decorate([
    NgModule({
        declarations: [...declerations],
        imports: [],
        exports: [...declerations],
    })
], NgApexchartsModule);

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, NgApexchartsModule };
//# sourceMappingURL=ng-apexcharts.js.map
