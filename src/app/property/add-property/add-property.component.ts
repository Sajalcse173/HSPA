import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from 'src/app/models/IPropertyBase';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm:NgForm;

  @ViewChild('formTabSets') formTabSets: TabsetComponent;

  propertyView:IProperty ={
    Id: 0,
    SellPent: 0,
    Name: '',
    Type: '',
    Price: 0
  };

  propertyType: Array<string>=["House","Vila","Flat","Appretment"];
  furnishType:Array<string>=["Fully","Semi","Unfurnish"];
  areaZoon:Array<string>=["East","West","South","North"];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmited(Form:NgForm){
    console.log("Congratulated");
    console.log(Form);
  }
  selectTab(tabId: number) {
    if (this.formTabSets?.tabs[tabId]) {
      this.formTabSets.tabs[tabId].active = true;
    }
  }
}
