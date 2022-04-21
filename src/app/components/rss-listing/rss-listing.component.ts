import { Component, OnInit } from '@angular/core';
import { RssService } from 'src/app/shared/rss.service';


@Component({
  selector: 'app-rss-listing',
  templateUrl: './rss-listing.component.html',
  styleUrls: ['./rss-listing.component.css']
})
export class RssListingComponent implements OnInit {
  dataSource:any
  fetchedData:any
  debut=0
  fin=10
  constructor(private rssService:RssService) {
  }
  ngOnInit(): void {
    this.getFlux()
  }

  getFlux(){
    this.rssService.getRssFlux().subscribe(res=>{
      this.dataSource=res
      this.fetchedData=this.dataSource.slice(this.debut,this.fin)
      console.log(this.fetchedData)
    },err=>{
      console.log(err)
    })
  }
  
  suiv(){
    this.debut=this.fin
    this.fin=this.fin+10
    this.getFlux()
  }
  prec(){
    this.fin=this.debut
    if(this.debut!=0){
      this.debut=this.debut-10
    }
    this.getFlux()
  }
  edit(){
    
  }

  displayedColumns: string[] = ['Image','Titre', 'Description','Action'];


}
