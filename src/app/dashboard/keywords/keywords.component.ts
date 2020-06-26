import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { KeywordsModel } from 'src/app/models/keywords.model';
import { FxchartService } from 'src/app/services/fxchart.service';
import { Analyst, Keyword } from 'src/app/models/fxchart.model';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  keywordsForm: FormGroup;
  keywordsModel:Keyword;
  analysts: KeywordsModel[];
  experts:Analyst;
  keywords:Keyword;
  dataTable: any;
  constructor(
    private fb: FormBuilder,
    private fxService:FxchartService,
    private chRef: ChangeDetectorRef,
    ) { }
    
    ngOnInit(): void {
      this.buildExpertsForm();
      this.fxService.getAnalysts().subscribe(response =>{
        this.experts = response;
      })
      this.getKeywords();
    }
    
    getKeywords(){
      this.fxService.getKeywords().subscribe((response:any)=>{
        this.keywords=response;
        console.log(this.keywords);
        // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();
        
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });  
    }
    buildExpertsForm() {
      this.keywordsForm = this.fb.group({
        name: new FormControl(),
        analystId: new FormControl(),
        
      })
    }
    onSubmit(form) {
      this.keywordsModel = this.keywordsForm.value;
      this.fxService.registerKeyword(this.keywordsModel).subscribe(response=>{
        this.keywordsForm.reset();
        this.getKeywords();
      })
    }
  }
  