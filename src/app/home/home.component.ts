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
  searchQuery: string = '';
  searchResults = this.filteredArray;
  outputArray: any[] = [];
  constructor(private router: Router, private vaultService: VaultService) { }

  ngOnInit(): void {
    this.filteredArray = this.vaultService.allData;
    this.outputArray = this.filteredArray;
  }

  searchProducts() {
    this.outputArray = this.filteredArray.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  showMore(data: any) {
    this.router.navigate(['viewMore', data.id]);
  }
}
