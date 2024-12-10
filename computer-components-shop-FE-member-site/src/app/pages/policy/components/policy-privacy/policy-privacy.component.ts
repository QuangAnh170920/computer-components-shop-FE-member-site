import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-privacy',
  templateUrl: './policy-privacy.component.html',
  styleUrl: './policy-privacy.component.scss'
})
export class PolicyPrivacyComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
