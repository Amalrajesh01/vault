import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaultService } from '../Services/vault.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  routeid: any;
  filteredArray: any[] = [];
  data: any;
  constructor(private route: ActivatedRoute, private vaultService: VaultService, private location: Location) { }
  ngOnInit(): void {
    this.routeid = this.route.snapshot.paramMap.get('id');
    this.filteredArray = this.vaultService.getItemById(this.routeid);

  }
  goBack(): void {
    this.location.back();
  }

}