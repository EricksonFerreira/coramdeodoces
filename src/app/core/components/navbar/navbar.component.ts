import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() menuClosed = new EventEmitter<void>();
  sidebarOpen = true;
  expandedClass = ''; // Nova propriedade
  aside = false;
  clickedIcons: string[] = [];
  isScreenLarge = true;
  @Input() isLoggedIn:boolean|undefined = false;

  constructor(private renderer: Renderer2,public authService: AuthService){}

  toggleSidebar() {
    this.renderer.addClass(document.body, 'sidebar-open');
    this.expandedClass = 'expanded'; // Define a classe expandida quando o menu está aberto
    this.aside=true;
  }
  closeSidebar() {
    // this.renderer.removeClass(document.body, 'sidebar-open');
    this.aside=false;
    // this.expandedClass = '';

    // this.menuClosed.emit();
  }


  isIconHidden(iconName: string) {
    return this.clickedIcons.includes(iconName);
  }

  toggleIcon(iconName: string) {
    if (this.clickedIcons.includes(iconName)) {
      this.clickedIcons = this.clickedIcons.filter((icon) => icon !== iconName);
    } else {
      this.clickedIcons.push(iconName);
    }
  }

  logout() {
    this.authService.doLogout()
  }

  ngOnInit(): void {
  }

}
