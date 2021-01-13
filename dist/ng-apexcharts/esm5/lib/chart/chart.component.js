import { __decorate } from "tslib";
import { Component, Input, ViewChild, } from "@angular/core";
import { asapScheduler } from "rxjs";
import * as ApexCharts from "apexcharts";
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
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXBleGNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQXNCdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQU96QztJQUFBO1FBdUJXLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQXlObkMsQ0FBQztJQXBOQyxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBWUM7UUFYQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQ0UsS0FBSSxDQUFDLGdCQUFnQjtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssUUFBUSxFQUFkLENBQWMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQy9EO2dCQUNBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNSO1lBRUQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJ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S0FBSyxFQUFFO2lEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtvREFBNkI7SUFDNUI7UUFBUixLQUFLLEVBQUU7aURBQWtCO0lBRWpCO1FBQVIsS0FBSyxFQUFFOzREQUF5QjtJQUVLO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7d0RBQWtDO0lBekI1RCxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGtDQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0FnUDFCO0lBQUQscUJBQUM7Q0FBQSxBQWhQRCxJQWdQQztTQWhQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFwZXhBbm5vdGF0aW9ucyxcclxuICBBcGV4QXhpc0NoYXJ0U2VyaWVzLFxyXG4gIEFwZXhDaGFydCxcclxuICBBcGV4RGF0YUxhYmVscyxcclxuICBBcGV4RmlsbCxcclxuICBBcGV4R3JpZCxcclxuICBBcGV4TGVnZW5kLFxyXG4gIEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgQXBleE1hcmtlcnMsXHJcbiAgQXBleE5vRGF0YSxcclxuICBBcGV4UGxvdE9wdGlvbnMsXHJcbiAgQXBleFJlc3BvbnNpdmUsXHJcbiAgQXBleFN0YXRlcyxcclxuICBBcGV4U3Ryb2tlLFxyXG4gIEFwZXhUaGVtZSxcclxuICBBcGV4VGl0bGVTdWJ0aXRsZSxcclxuICBBcGV4VG9vbHRpcCxcclxuICBBcGV4WEF4aXMsXHJcbiAgQXBleFlBeGlzLFxyXG59IGZyb20gXCIuLi9tb2RlbC9hcGV4LXR5cGVzXCI7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXB4LWNoYXJ0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jaGFydC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBjaGFydDogQXBleENoYXJ0O1xyXG4gIEBJbnB1dCgpIGFubm90YXRpb25zOiBBcGV4QW5ub3RhdGlvbnM7XHJcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcclxuICBASW5wdXQoKSBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcclxuICBASW5wdXQoKSBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzO1xyXG4gIEBJbnB1dCgpIHN0cm9rZTogQXBleFN0cm9rZTtcclxuICBASW5wdXQoKSBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGxlZ2VuZDogQXBleExlZ2VuZDtcclxuICBASW5wdXQoKSBtYXJrZXJzOiBBcGV4TWFya2VycztcclxuICBASW5wdXQoKSBub0RhdGE6IEFwZXhOb0RhdGE7XHJcbiAgQElucHV0KCkgZmlsbDogQXBleEZpbGw7XHJcbiAgQElucHV0KCkgdG9vbHRpcDogQXBleFRvb2x0aXA7XHJcbiAgQElucHV0KCkgcGxvdE9wdGlvbnM6IEFwZXhQbG90T3B0aW9ucztcclxuICBASW5wdXQoKSByZXNwb25zaXZlOiBBcGV4UmVzcG9uc2l2ZVtdO1xyXG4gIEBJbnB1dCgpIHhheGlzOiBBcGV4WEF4aXM7XHJcbiAgQElucHV0KCkgeWF4aXM6IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xyXG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xyXG4gIEBJbnB1dCgpIHN0YXRlczogQXBleFN0YXRlcztcclxuICBASW5wdXQoKSB0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XHJcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBBcGV4VGhlbWU7XHJcblxyXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlcmllcyh0aGlzLnNlcmllcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgb3B0aW9ucy5jaGFydCA9IHRoaXMuY2hhcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcclxuICAgICAgb3B0aW9ucy5jb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhTGFiZWxzID0gdGhpcy5kYXRhTGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XHJcbiAgICAgIG9wdGlvbnMuc2VyaWVzID0gdGhpcy5zZXJpZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdHJva2UpIHtcclxuICAgICAgb3B0aW9ucy5zdHJva2UgPSB0aGlzLnN0cm9rZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVscykge1xyXG4gICAgICBvcHRpb25zLmxhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIG9wdGlvbnMubGVnZW5kID0gdGhpcy5sZWdlbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIG9wdGlvbnMuZmlsbCA9IHRoaXMuZmlsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgb3B0aW9ucy50b29sdGlwID0gdGhpcy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5wbG90T3B0aW9ucyA9IHRoaXMucGxvdE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XHJcbiAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHRoaXMucmVzcG9uc2l2ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgb3B0aW9ucy5tYXJrZXJzID0gdGhpcy5tYXJrZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XHJcbiAgICAgIG9wdGlvbnMubm9EYXRhID0gdGhpcy5ub0RhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54YXhpcykge1xyXG4gICAgICBvcHRpb25zLnhheGlzID0gdGhpcy54YXhpcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnlheGlzKSB7XHJcbiAgICAgIG9wdGlvbnMueWF4aXMgPSB0aGlzLnlheGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xyXG4gICAgICBvcHRpb25zLmdyaWQgPSB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcclxuICAgICAgb3B0aW9ucy5zdGF0ZXMgPSB0aGlzLnN0YXRlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIG9wdGlvbnMudGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcclxuICAgICAgb3B0aW9ucy5zdWJ0aXRsZSA9IHRoaXMuc3VidGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aGVtZSkge1xyXG4gICAgICBvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHModGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVPcHRpb25zKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcmVkcmF3UGF0aHM/OiBib29sZWFuLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW4sXHJcbiAgICB1cGRhdGVTeW5jZWRDaGFydHM/OiBib29sZWFuXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai51cGRhdGVPcHRpb25zKFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICByZWRyYXdQYXRocyxcclxuICAgICAgYW5pbWF0ZSxcclxuICAgICAgdXBkYXRlU3luY2VkQ2hhcnRzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlcmllcyhcclxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgICBhbmltYXRlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBlbmRTZXJpZXMoXHJcbiAgICBuZXdTZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cclxuICApIHtcclxuICAgIHRoaXMuY2hhcnRPYmouYXBwZW5kU2VyaWVzKG5ld1NlcmllcywgYW5pbWF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwZW5kRGF0YShuZXdEYXRhOiBhbnlbXSkge1xyXG4gICAgdGhpcy5jaGFydE9iai5hcHBlbmREYXRhKG5ld0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnNob3dTZXJpZXMoc2VyaWVzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouaGlkZVNlcmllcyhzZXJpZXNOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldFNlcmllcygpIHtcclxuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouem9vbVgobWluLCBtYXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihcclxuICAgIHNlcmllc0luZGV4OiBudW1iZXIsXHJcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFydE9iai50b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouc2V0TG9jYWxlKGxvY2FsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcGVyKCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5wYXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFhheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFhheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFlheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUFubm90YXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xyXG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouY2xlYXJBbm5vdGF0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRhVVJJKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSSgpO1xyXG4gIH1cclxufVxyXG4iXX0=