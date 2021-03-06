import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart/chart.component";
import * as ApexCharts from "apexcharts";
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
export { NgApexchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYXBleGNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hcGV4Y2hhcnRzLyIsInNvdXJjZXMiOlsibGliL25nLWFwZXhjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQVF6QyxJQUFHLE1BQU0sRUFBRTtJQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQ2hDO0FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQU90QyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHLENBQUE7QUFBckIsa0JBQWtCO0lBTDlCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7S0FDM0IsQ0FBQztHQUNXLGtCQUFrQixDQUFHO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFydC9jaGFydC5jb21wb25lbnRcIjtcclxuaW1wb3J0ICogYXMgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgQXBleENoYXJ0czogYW55O1xyXG4gIH1cclxufVxyXG5cclxuaWYod2luZG93KSB7XHJcbiAgd2luZG93LkFwZXhDaGFydHMgPSBBcGV4Q2hhcnRzO1xyXG59XHJcblxyXG5jb25zdCBkZWNsZXJhdGlvbnMgPSBbQ2hhcnRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5kZWNsZXJhdGlvbnNdLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFsuLi5kZWNsZXJhdGlvbnNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdBcGV4Y2hhcnRzTW9kdWxlIHt9XHJcbiJdfQ==