import { __decorate } from "tslib";
import { Component, Input, ViewChild, } from "@angular/core";
import { asapScheduler } from "rxjs";
import * as ApexCharts from "apexcharts";
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
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXBleGNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQXNCdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQU96QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQTNCO1FBdUJXLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQXlObkMsQ0FBQztJQXBOQyxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pC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T0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO29EQUFrQztBQXpCNUQsY0FBYztJQUwxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixrQ0FBcUM7O0tBRXRDLENBQUM7R0FDVyxjQUFjLENBZ1AxQjtTQWhQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFwZXhBbm5vdGF0aW9ucyxcclxuICBBcGV4QXhpc0NoYXJ0U2VyaWVzLFxyXG4gIEFwZXhDaGFydCxcclxuICBBcGV4RGF0YUxhYmVscyxcclxuICBBcGV4RmlsbCxcclxuICBBcGV4R3JpZCxcclxuICBBcGV4TGVnZW5kLFxyXG4gIEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgQXBleE1hcmtlcnMsXHJcbiAgQXBleE5vRGF0YSxcclxuICBBcGV4UGxvdE9wdGlvbnMsXHJcbiAgQXBleFJlc3BvbnNpdmUsXHJcbiAgQXBleFN0YXRlcyxcclxuICBBcGV4U3Ryb2tlLFxyXG4gIEFwZXhUaGVtZSxcclxuICBBcGV4VGl0bGVTdWJ0aXRsZSxcclxuICBBcGV4VG9vbHRpcCxcclxuICBBcGV4WEF4aXMsXHJcbiAgQXBleFlBeGlzLFxyXG59IGZyb20gXCIuLi9tb2RlbC9hcGV4LXR5cGVzXCI7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXB4LWNoYXJ0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jaGFydC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBjaGFydDogQXBleENoYXJ0O1xyXG4gIEBJbnB1dCgpIGFubm90YXRpb25zOiBBcGV4QW5ub3RhdGlvbnM7XHJcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcclxuICBASW5wdXQoKSBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcclxuICBASW5wdXQoKSBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzO1xyXG4gIEBJbnB1dCgpIHN0cm9rZTogQXBleFN0cm9rZTtcclxuICBASW5wdXQoKSBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGxlZ2VuZDogQXBleExlZ2VuZDtcclxuICBASW5wdXQoKSBtYXJrZXJzOiBBcGV4TWFya2VycztcclxuICBASW5wdXQoKSBub0RhdGE6IEFwZXhOb0RhdGE7XHJcbiAgQElucHV0KCkgZmlsbDogQXBleEZpbGw7XHJcbiAgQElucHV0KCkgdG9vbHRpcDogQXBleFRvb2x0aXA7XHJcbiAgQElucHV0KCkgcGxvdE9wdGlvbnM6IEFwZXhQbG90T3B0aW9ucztcclxuICBASW5wdXQoKSByZXNwb25zaXZlOiBBcGV4UmVzcG9uc2l2ZVtdO1xyXG4gIEBJbnB1dCgpIHhheGlzOiBBcGV4WEF4aXM7XHJcbiAgQElucHV0KCkgeWF4aXM6IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xyXG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xyXG4gIEBJbnB1dCgpIHN0YXRlczogQXBleFN0YXRlcztcclxuICBASW5wdXQoKSB0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XHJcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBBcGV4VGhlbWU7XHJcblxyXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlcmllcyh0aGlzLnNlcmllcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgb3B0aW9ucy5jaGFydCA9IHRoaXMuY2hhcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcclxuICAgICAgb3B0aW9ucy5jb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhTGFiZWxzID0gdGhpcy5kYXRhTGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XHJcbiAgICAgIG9wdGlvbnMuc2VyaWVzID0gdGhpcy5zZXJpZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdHJva2UpIHtcclxuICAgICAgb3B0aW9ucy5zdHJva2UgPSB0aGlzLnN0cm9rZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVscykge1xyXG4gICAgICBvcHRpb25zLmxhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIG9wdGlvbnMubGVnZW5kID0gdGhpcy5sZWdlbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIG9wdGlvbnMuZmlsbCA9IHRoaXMuZmlsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgb3B0aW9ucy50b29sdGlwID0gdGhpcy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5wbG90T3B0aW9ucyA9IHRoaXMucGxvdE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XHJcbiAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHRoaXMucmVzcG9uc2l2ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgb3B0aW9ucy5tYXJrZXJzID0gdGhpcy5tYXJrZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XHJcbiAgICAgIG9wdGlvbnMubm9EYXRhID0gdGhpcy5ub0RhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54YXhpcykge1xyXG4gICAgICBvcHRpb25zLnhheGlzID0gdGhpcy54YXhpcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnlheGlzKSB7XHJcbiAgICAgIG9wdGlvbnMueWF4aXMgPSB0aGlzLnlheGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xyXG4gICAgICBvcHRpb25zLmdyaWQgPSB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcclxuICAgICAgb3B0aW9ucy5zdGF0ZXMgPSB0aGlzLnN0YXRlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIG9wdGlvbnMudGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcclxuICAgICAgb3B0aW9ucy5zdWJ0aXRsZSA9IHRoaXMuc3VidGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aGVtZSkge1xyXG4gICAgICBvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHModGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVPcHRpb25zKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcmVkcmF3UGF0aHM/OiBib29sZWFuLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW4sXHJcbiAgICB1cGRhdGVTeW5jZWRDaGFydHM/OiBib29sZWFuXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai51cGRhdGVPcHRpb25zKFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICByZWRyYXdQYXRocyxcclxuICAgICAgYW5pbWF0ZSxcclxuICAgICAgdXBkYXRlU3luY2VkQ2hhcnRzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlcmllcyhcclxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgICBhbmltYXRlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBlbmRTZXJpZXMoXHJcbiAgICBuZXdTZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cclxuICApIHtcclxuICAgIHRoaXMuY2hhcnRPYmouYXBwZW5kU2VyaWVzKG5ld1NlcmllcywgYW5pbWF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwZW5kRGF0YShuZXdEYXRhOiBhbnlbXSkge1xyXG4gICAgdGhpcy5jaGFydE9iai5hcHBlbmREYXRhKG5ld0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnNob3dTZXJpZXMoc2VyaWVzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouaGlkZVNlcmllcyhzZXJpZXNOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldFNlcmllcygpIHtcclxuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouem9vbVgobWluLCBtYXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihcclxuICAgIHNlcmllc0luZGV4OiBudW1iZXIsXHJcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFydE9iai50b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouc2V0TG9jYWxlKGxvY2FsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcGVyKCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5wYXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFhheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFhheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFlheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUFubm90YXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xyXG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouY2xlYXJBbm5vdGF0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRhVVJJKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSSgpO1xyXG4gIH1cclxufVxyXG4iXX0=