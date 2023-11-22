import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
[x: string]: any;

  // Déclaration des variables
  commentId = 1;
  details = "";
  detailsData : any ;
  tabDetails : any [] = [];

  constructor (private userDetail: DetailsService){}

  ngOnInit(): void {
    this.userDetail.getUserById(this.commentId).subscribe(data =>{
      this.detailsData = data;
      console.log(this.detailsData);
    })
    this.afficherDetails(),
    console.log(this.afficherDetails);
  }
  afficherDetails(){
    this.userDetail.detailData().subscribe((data) => {
    this.detailsData = data;
    this.tabDetails = this.detailsData

    });
  }


   partieDetail: boolean = true;
   listeCoice(){
    this.partieDetail = !this.partieDetail
  }

}
