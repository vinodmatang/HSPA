
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  constructor(private route: ActivatedRoute, private housingService:HousingService){ }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent=2; //Mean we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=> {
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
        }, error => {
          console.log(error);
        }

    );
  }
}
