import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'contact-form-main';

  @ViewChild('option') option!: ElementRef;

  ngOnInit(): void {
    const queryoptions = document.getElementsByClassName('option');
    Array.from(queryoptions).forEach((q: Element) => {
      q.addEventListener('change', tick);
    });

    function tick(e: Event) {
      const state = (e.target as HTMLInputElement).checked;
      Array.from(queryoptions).forEach((q: Element) => {
        (q as HTMLInputElement).checked = false;
      });
      (e.target as HTMLInputElement).checked = state;
    }
  }
}