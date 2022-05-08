import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery'




@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property=new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[]

  public PropertyId:number;
  route: any;
  constructor(private routes:ActivatedRoute,
    private router:Router,private housingService:HousingService) { }

  ngOnInit() {
    this.PropertyId=Number(this.routes.snapshot.params['id']);
    this.routes.data.subscribe(
      (data:Property)=>
      this.property=data['prp']
      );

      this.property.age=this.housingService.getPropertyAge(this.property.estPossessionOn);

    // this.routes.params.subscribe(
    //   (param)=>{
    //     this.PropertyId=+param['id'];
    //     this.housingService.getProperty(this.PropertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       },error=>this.router.navigate(['/'])

    //     );
    //   }
    // )

    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/House/Img1.jpg',
        medium: 'assets/House/Img1.jpg',
        big: 'assets/House/Img1.jpg'
      },
      {
        small: 'assets/House/Img2.jpg',
        medium: 'assets/House/Img2.jpg',
        big: 'assets/House/Img2.jpg'
      },
      {
        small: 'assets/House/Img3.jpg',
        medium: 'assets/House/Img3.jpg',
        big: 'assets/House/Img3.jpg'
      },{
        small: 'assets/House/Img4.jpg',
        medium: 'assets/House/Img4.jpg',
        big: 'assets/House/Img4.jpg'
      },
      {
        small: 'assets/House/Img6.jpg',
        medium: 'assets/House/Img6.jpg',
        big: 'assets/House/Img6.jpg'
      }
    ];

  }


}
