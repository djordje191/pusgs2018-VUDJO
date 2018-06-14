import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {ListOfBranchesService} from 'src/app/services/list-of-branches.service'
import {HttpClient} from '@angular/common/http';
import { debug } from 'util';


@Component({
  selector: 'app-list-of-branches',
  templateUrl: './list-of-branches.component.html',
  styleUrls: ['./list-of-branches.component.css'],
  providers:[ListOfBranchesService]
})
export class ListOfBranchesComponent implements OnInit {

  public Branches : any;

  constructor(private branchesGetter:ListOfBranchesService) { 
    this.getListOfBranches();
  }

  ngOnInit() {
  }

  getListOfBranches(){
    this.branchesGetter.getListOfBranches()
    .subscribe(
      data => {
        this.Branches=data;
        console.log(this.Branches);
      },
      error => {
        alert("Didn't get list of branches!");
      })
    }
}
