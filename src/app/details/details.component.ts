import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // Déclaration des variables
  details = "";
  detailsData : any ;
  tabDetails : any [] = [];

  constructor (private userDetail: DetailsService){}

  ngOnInit(): void {
    this.afficherDetails(),
    console.log(this.afficherDetails);
  }
  afficherDetails(){
    this.userDetail.detailData().subscribe((data) => {
    this.detailsData = data;
    this.tabDetails = this.detailsData

    });
    console.log(this.afficherDetails);
  }


   partieDetail: boolean = true;
   listeCoice(){
    this.partieDetail = !this.partieDetail
  }

}
