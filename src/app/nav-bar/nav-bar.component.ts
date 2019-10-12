import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() public title: string;
  @Input() public openableSideNavbar: MatSidenav;
  public iconPath: string;

  constructor( ) { }

  ngOnInit() {
    this.iconPath = '../assets/images/kisspng-film-cinema-logo-cinema-x-chin-5ad8baa21ebd72.5910714415241529941259.png';
  }

}
