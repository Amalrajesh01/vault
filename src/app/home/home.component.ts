import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VaultService } from '../Services/vault.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  blogDataArray: any[] = [];
  filteredArray: any[] = [];
  searchTerm: string = '';
  title!: string;
  body!: string;
  constructor(private router: Router, private vaultService: VaultService) {
  }
  ngOnInit(): void {

    this.filteredArray = this.vaultService.allData;
  }

  showMore(data: any) {
    this.router.navigate(['viewMore', data.id]);
  }


  search(): void {
    this.filteredArray = this.blogDataArray.filter((blogItem) =>
      blogItem.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
