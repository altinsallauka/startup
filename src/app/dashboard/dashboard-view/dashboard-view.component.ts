import { Component, OnInit } from '@angular/core';
import { FxChart, analystCount, keywordsCount } from 'src/app/models/fxchart.model';
import { FxchartService } from 'src/app/services/fxchart.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  fxChart:FxChart[]
  analystCount:analystCount;
  keywordCount:keywordsCount;
  constructor(
    private fxService:FxchartService
    ) { }
    
    ngOnInit(): void {
      this.fxService.getAnalystCount().subscribe(response=>{
        this.analystCount=response;
      })
      this.fxService.getKeywordCount().subscribe(response=>{
        this.keywordCount=response;
      })
    }
    
  }
  