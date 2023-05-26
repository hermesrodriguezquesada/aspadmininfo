import { Component, OnInit } from '@angular/core';
import { DashboardInterface } from 'src/app/shared/models/dashboard.interface';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  dashboardData!: DashboardInterface;

  constructor(private infoDataService: DashboardService) {  }

  ngOnInit(): void {
    this.infoDataService.getInfo().subscribe(json => {
      this.dashboardData = json.data;
    });
  }

}
