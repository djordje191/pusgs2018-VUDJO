import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {ListOfBranchesService} from 'src/app/services/list-of-branches.service'
import {HttpClient} from '@angular/common/http';
import { debug } from 'util';
import { UploadFileServiceService } from '../services/upload-file-service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-list-of-branches',
  templateUrl: './list-of-branches.component.html',
  styleUrls: ['./list-of-branches.component.css'],
  providers:[ListOfBranchesService, UploadFileServiceService]
})
export class ListOfBranchesComponent implements OnInit {
  @Input() serviceEmail: string;
  public Branches : any;

  constructor(private branchesGetter:ListOfBranchesService, private imagesGetter:UploadFileServiceService, private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.getListOfBranches();
  }

  getListOfBranches(){
    this.branchesGetter.getListOfBranches(this.serviceEmail)
    .subscribe(
      data => {
        console.log(this.serviceEmail);
        this.Branches=data;
      },
      error => {
        alert("Didn't get list of branches!");
      })
    }
}
