import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bar-chart';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins:any = {'backgroundColor': [
    "#FF6384",
 "#4BC0C0",
 "#FFCE56",
 "#E7E9ED",
 "#36A2EB"
 ]}
 public barChartColors: Color[] = [
  { backgroundColor: 'green' },
]

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46], label: 'Task Status' }
  ];
}
