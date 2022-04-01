import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public PropertyId:number;
  constructor(private routes:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.PropertyId=Number(this.routes.snapshot.params['id']);

    this.routes.params.subscribe(
      (param)=>{
        this.PropertyId=+param['id'];
      }
    )
  }
  onSelectNext(){
    this.PropertyId+=1;
    this.router.navigate(['property-detail/',this.PropertyId])
  }

}
