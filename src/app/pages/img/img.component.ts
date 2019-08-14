import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  imgRemote: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.imgRemote = this.dataService.getPhotos()

  }
  


}
