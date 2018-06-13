import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AddBranchService} from 'src/app/services/add-branch.service'
import {Branch} from '../models/branch.model'


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers:[AddBranchService]
})
export class BranchComponent implements OnInit {

  constructor(private addBranchService: AddBranchService) { }

  ngOnInit() {
  }

  onSubmit(branches: Branch) {
    console.log(branches);
    this.addBranchService.postBranch(branches)
    .subscribe(
      data => {
        alert(data);
      },
      error => {
        alert("Branch already exists!");
      })
      //form.resetForm();
  }
}
