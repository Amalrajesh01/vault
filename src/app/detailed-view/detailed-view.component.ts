import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaultService } from '../Services/vault.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  routeid: any;
  filteredArray: any[] = [];
  data: any;
  constructor(private route: ActivatedRoute, private vaultService: VaultService) { }
  ngOnInit(): void {
    this.routeid = this.route.snapshot.paramMap.get('id');
    this.filteredArray = this.vaultService.getItemById(this.routeid);

  }
}