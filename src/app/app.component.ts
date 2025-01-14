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

  apimSubKey = '7d4194cacd3b42679f621ff66f7a189a';

  message = ""
  // message = "<script>alert('XSS');</script>"
  
  // htmlSnippet: string = "toto";
  // htmlSnippet: string = "<script>console.log('toto')</script>";
  htmlSnippet: string = '<script>alert("Hi !, I am script and I bypassed angular security")</script>otto';
  
  messages!: any;
  constructor(protected sanitizer: DomSanitizer){
    this.messages = this.sanitizer.bypassSecurityTrustHtml(this.htmlSnippet);

  }

  onChange($event:any){
    console.log($event)
    this.message = $event.target.value;
    this.messages = this.sanitizer.bypassSecurityTrustHtml(this.message);
  }
}
