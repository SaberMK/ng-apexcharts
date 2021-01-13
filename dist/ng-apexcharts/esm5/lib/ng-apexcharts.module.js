import { __decorate, __read, __spread } from "tslib";
import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart/chart.component";
import * as ApexCharts from "apexcharts";
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
export { NgApexchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYXBleGNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hcGV4Y2hhcnRzLyIsInNvdXJjZXMiOlsibGliL25nLWFwZXhjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQVF6QyxJQUFHLE1BQU0sRUFBRTtJQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQ2hDO0FBRUQsSUFBTSxZQUFZLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQU90QztJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBTDlCLFFBQVEsQ0FBQztZQUNSLFlBQVksV0FBTSxZQUFZLENBQUM7WUFDL0IsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLFdBQU0sWUFBWSxDQUFDO1NBQzNCLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBBcGV4Q2hhcnRzIGZyb20gXCJhcGV4Y2hhcnRzXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBBcGV4Q2hhcnRzOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5pZih3aW5kb3cpIHtcclxuICB3aW5kb3cuQXBleENoYXJ0cyA9IEFwZXhDaGFydHM7XHJcbn1cclxuXHJcbmNvbnN0IGRlY2xlcmF0aW9ucyA9IFtDaGFydENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWy4uLmRlY2xlcmF0aW9uc10sXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogWy4uLmRlY2xlcmF0aW9uc10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0FwZXhjaGFydHNNb2R1bGUge31cclxuIl19