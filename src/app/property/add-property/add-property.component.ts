import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from 'src/app/models/IPropertyBase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm:NgForm;

  @ViewChild('formTabSets') formTabSets: TabsetComponent;

  propertyView:IPropertyBase ={
    Id: null,
    SellRent: null,
    Name: null,
    PType: null,
    FType: null,
    Price: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null

  };

  propertyType: Array<string>=["House","Vila","Flat","Appretment"];
  furnishType:Array<string>=["Fully","Semi","Unfurnished"];
  areaZoon:Array<string>=["East","West","South","North"];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmited(){
    console.log("Congratulated");
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    if (this.formTabSets?.tabs[tabId]) {
      this.formTabSets.tabs[tabId].active = true;
    }
  }
}
