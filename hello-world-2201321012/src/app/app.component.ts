import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world-2201321012';
  showAdditionalInfo: number = 0;

  toggleAdditionalInfo(index: number): void {
    if (this.showAdditionalInfo === index) { 
      this.showAdditionalInfo = 0;
    } else {
      this.showAdditionalInfo = index;
    }
  }
}
