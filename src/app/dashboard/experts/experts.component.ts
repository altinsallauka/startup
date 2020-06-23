import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FxchartService } from 'src/app/services/fxchart.service';
import { Analyst } from 'src/app/models/fxchart.model';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  expertsForm: FormGroup;
  analystModel:Analyst;
  analysts:Analyst;
  dataTable: any;
  constructor(
    private fb: FormBuilder,
    private fxService:FxchartService,
    private chRef: ChangeDetectorRef,
    ) { }
    
    buildExpertsForm() {
      this.expertsForm = this.fb.group({
        firstName: new FormControl(),
        lastName: new FormControl(),
        expertise: new FormControl(),
        country: new FormControl(),
        workingFxSince: new FormControl(),
        education: new FormControl(),
        
      })
    }
    ngOnInit(): void {
      this.buildExpertsForm();
      this.getAnalysts();
    }
    getAnalysts(){
      this.fxService.getAnalysts().subscribe((response:any)=>{
        this.analysts=response;

        // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();
        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });  
    }
    onSubmit(form) {
      this.analystModel = this.expertsForm.value;
      this.fxService.registerAnalyst(this.analystModel).subscribe(response =>{
        this.getAnalysts();
      })
    }
    
  }
  