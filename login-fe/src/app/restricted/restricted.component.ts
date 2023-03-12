import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent {

  role; 

  constructor(private router: Router) {
    this.role = this.router.getCurrentNavigation()?.extras.state?.['role'];
    
  }

  ngOnInit() {
    let eleToHide:HTMLElement|null;
    console.log(this.role)
    if (this.role === "ROLE_MANAGER") {
      eleToHide = document.getElementById("unauthenticated")
    } else {
      eleToHide = document.getElementById("authenticated")
    }
  
    if (eleToHide) {
      eleToHide.style.display = "none"
    }
  }

}
