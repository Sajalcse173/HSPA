import { Component, OnInit, ViewChild } from '@angular/core';
import { TabHeadingDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from 'src/app/models/IPropertyBase';
import { flatMap } from 'rxjs';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';
import { AlertifyserviceService } from 'src/app/services/alertifyservice.service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  // @ViewChild('Form') addPropertyForm:NgForm;

  @ViewChild('formTabSets') formTabSets: TabsetComponent;
  addPropertyForm:FormGroup;
  NextTab:boolean;
  property=new Property();
  cityList:any[];

  propertyView:IPropertyBase ={
    Id: null,
    SellRent: null,
    Name: null,
    PType: null,
    FType: null,
    Price: null,
    BHK: null,
    BuiltArea: null,
    City: '',
    RTM: null

  };

  propertyType: Array<string>=["House","Vila","Flat","Appretment"];
  furnishType:Array<string>=["Fully","Semi","Unfurnished"];
  areaZoon:Array<string>=["East","West","South","North"];


  constructor(private fb:FormBuilder,private router:Router,private hServices:HousingService,
    private alertify:AlertifyserviceService) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
    this.hServices.getAllCities().subscribe(
      data=>{
        this.cityList=data;
        // console.log(data);
      }
    )
  }

  createAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
        Basicinfo:this.fb.group({
        SellRent:[1,Validators.required],
        BHK:[null,Validators.required],
        PType:[null,Validators.required],
        FType:[null,Validators.required],
        Name:[null,Validators.required],
        City:[null,Validators.required]
      }),
      PriceInfo:this.fb.group({
        Price:[null,Validators.required],
        BuiltArea:[null,Validators.required],
        Security:[null],
        Maintain:[null],
        CarpetArea:[null]
      }),
      AddressInfo:this.fb.group({
        FloorNo:[null,Validators.required],
        Address:[null,Validators.required],
        TotalFloor:[null],
        LandMark:[null]
      }),
      OtherInfo:this.fb.group({
        RTM:[null,Validators.required],
        PossessionOn:[null],
        Ageproperty:[null],
        GetedCommunity:[null],
        Area:[null],
        Description:[null]
      }),
      Photo:this.fb.group({

      })
    });
  }




// GetterMethon>


  get BasicInfo(){
    return this.addPropertyForm.get('Basicinfo') as FormGroup;
  }
  get PriceInfo(){
    return this.addPropertyForm.get('PriceInfo') as FormGroup;
  }
  get AddressInfo(){
    return this.addPropertyForm.get('AddressInfo') as FormGroup;
  }
  get OtherInfo() {
    return this.addPropertyForm.get('OtherInfo') as FormGroup;
  }
  get Photo(){
    return this.addPropertyForm.get('Photo') as FormGroup;
  }



  // gettermethod for from control

  get SellRent(){
    return this.BasicInfo.get('SellRent') as FormControl;
  }
  get BHK(){
    return this.BasicInfo.get('BHK') as FormControl;
  }
  get Name(){
    return this.BasicInfo.get('Name') as FormControl;
  }
  get PType(){
    return this.BasicInfo.get('PType') as FormControl;
  }
  get FType(){
    return this.BasicInfo.get('FType') as FormControl;
  }
  get City(){
    return this.BasicInfo.get('City') as FormControl;
  }


  get Price(){
    return this.PriceInfo.get('Price') as FormControl;
  }
  get BuiltArea(){
    return this.PriceInfo.get('BuiltArea') as FormControl;
  }
  get Security(){
    return this.PriceInfo.get('Security') as FormControl;
  }
  get Maintain(){
    return this.PriceInfo.get('Maintain') as FormControl;
  }
  get CarpetArea(){
    return this.PriceInfo.get('CarpetArea') as FormControl;
  }


  get Address(){
    return  this.AddressInfo.get('Address') as FormControl;
  }
  get FloorNo(){
    return this.AddressInfo.get('FloorNo') as FormControl;
  }
  get TotalFloor(){
    return this.AddressInfo.get('TotalFloor') as FormControl;
  }
  get LandMark(){
    return this.AddressInfo.get('LandMark') as FormControl;
  }

  get RTM(){
    return this.OtherInfo.get('RTM') as FormControl;
  }
  get PossessionOn(){
    return this.OtherInfo.get('PossessionOn') as FormControl;
  }
  get Ageproperty(){
    return this.OtherInfo.get('Ageproperty') as FormControl;
  }
  get GetedCommunity(){
    return this.OtherInfo.get('GetedCommunity') as FormControl;
  }
  get Area(){
    return this.OtherInfo.get('Area') as FormControl;
  }
  get Description(){
    return this.OtherInfo.get('Description') as FormControl;
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmited(){
    this.NextTab=true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.hServices.addProperty(this.property);
      this.alertify.Success("SucessFull Store Data in Localstorage");
      console.log(this.addPropertyForm);
      if(this.SellRent.value==='2'){
        this.router.navigate(['/rent-property']);
      }else{
        this.router.navigate(['/']);
      }
    }
    else{
      console.log("Review From");
      this.alertify.Errors("Faild");
    }
  }

  mapProperty():void{
    this.property.Id=this.hServices.newPropID();
    this.property.SellRent=+this.SellRent.value;
    this.property.BHK=this.BHK.value;
    this.property.PType=this.PType.value;
    this.property.Name=this.Name.value;
    this.property.City=this.City.value;
    this.property.FType=this.FType.value;
    this.property.Price=this.Price.value;
    this.property.Security=this.Security.value;
    this.property.Maintenance=this.Maintain.value;
    this.property.BuiltArea=this.BuiltArea.value;
    this.property.CarParkArea=this.CarpetArea.value;
    this.property.FloorNo=this.FloorNo.value;
    this.property.TotalFlor=this.TotalFloor.value;
    this.property.Address=this.Address.value;
    this.property.Address2=this.LandMark.value;
    this.property.RTM=this.RTM.value;
    this.property.AgeProperty=this.Ageproperty.value;
    this.property.Gated=this.GetedCommunity.value;
    this.property.MainEntrance=this.Area.value;
    this.property.Possession=this.PossessionOn.value;
    this.property.Description=this.Description.value;
    this.property.PostedOn=new Date().toString();
  }

  allTabsValid(): boolean{

    if(this.BasicInfo.invalid){
      this.formTabSets.tabs[0].active = true;
      return false;
    }
    if(this.PriceInfo.invalid){
      this.formTabSets.tabs[1].active = true;
      return false;
    }
    if(this.AddressInfo.invalid){
      this.formTabSets.tabs[2].active=true;
      return false;
    }
    if(this.OtherInfo.invalid){
      this.formTabSets.tabs[3].active=true;
      return false;
    }
    if(this.Photo.invalid){
      return false;
    }
    return true;
  }
  selectTab(tabId: number,IsCurrentTab:boolean) {
    this.NextTab=true;
    if(IsCurrentTab){
      this.formTabSets.tabs[tabId].active = true;
      this.NextTab=false;
    }
  }
}
