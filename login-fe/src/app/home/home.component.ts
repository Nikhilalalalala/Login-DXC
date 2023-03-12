import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username:string
  role: string
  ROLE_MANAGER = "ROLE_MANAGER"
  constructor(private router: Router) {
    this.username = this.router.getCurrentNavigation()?.extras.state?.['username'];
    this.role = this.router.getCurrentNavigation()?.extras.state?.['role'];
    
  }

  ngOnInit() {
    let eleToHide:HTMLElement|null;
    if (this.username) {
      eleToHide = document.getElementById("unauthenticated")
    } else {
      eleToHide = document.getElementById("authenticated")
    }
  
    if (eleToHide) {
    eleToHide.style.display = "none"
    }
  }

  goToRestricted() {
    this.router.navigate(["/restricted"], {
      state: {
        role: this.role
      }
    })
  }
}
