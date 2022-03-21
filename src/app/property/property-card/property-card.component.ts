import { Component } from "@angular/core";

@Component({
  selector:'app-property-card',
  templateUrl:'property-card.component.html',
  styleUrls:[]
})

export class PropertyCardComponent{

  Property:any={
    "Id":1,
    "Name":"X-VIla",
    "Type":"House",
    "Price":20000
  }
}
