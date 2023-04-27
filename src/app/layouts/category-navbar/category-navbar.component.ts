import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {
  constructor(private el: ElementRef) {}

  scrollToFooter() {
    const footer = this.el.nativeElement.querySelector('#footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  }

  showAlert(){
    alert("Please Subscribe First....... ");
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  
  }


