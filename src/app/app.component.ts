import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SafePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'breach-frontend';
  message = "<script>alert('XSS');</script>"
  
  // htmlSnippet: string = "toto";
  // htmlSnippet: string = "<script>console.log('toto')</script>";
  htmlSnippet: string = '<script>alert("Hi !, I am script and I bypassed angular security")</script>otto';
  
  messages!: any;
  constructor(protected sanitizer: DomSanitizer){
  this.messages = this.sanitizer.bypassSecurityTrustScript(this.message);

  }

  onChange($event:any){
    this.message = $event.target.value;
    // this.sanitizer.bypassSecurityTrustScript(this.message);
    // console.log($event)
  }
}
