import { Component } from '@angular/core';
import { PostService } from 'src/service/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  public userData : any;
  public data : any;
  public myData: any;
  public _UserFilter = "";
  public filteredUser: any[] = [];

  constructor(private allpost : PostService){}

  ngOnInit(): void {
    this.afficher();
  }

  // public get userFilter(): any {
  //   return this._UserFilter;
  // }

  // public nom :any= this._UserFilter

  // public set userFilter(filter: string) {
  //   this._UserFilter = filter;
  //   this.filteredUser = this._UserFilter ? this.filterUsers(this.userFilter) : this.myData;
  // }

  // private filterUsers(criteria: string): any[]{
  //   criteria = criteria.toLocaleLowerCase();
  //   const res = this.myData.filter(
  //     (user: any) => user.name.toLocaleLowerCase().indexOf(criteria) !== -1
  //   );
  //   return res;
  // }

  afficher() {
    this.allpost.userData().subscribe((data)=>{
      this.myData = data;
      console.log(data);
      // this.filteredUser = this.myData
    });
  }

  // voir(){
  //   this.allpost.userData().subscribe(res)=>{
  //     this.myData = res;
  //     this.filteredUser = this.myData

  //   }
  // }
}
