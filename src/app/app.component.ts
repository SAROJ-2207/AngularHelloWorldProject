import { Component } from '@angular/core';

/**To create helloworld app and use property,Event binding */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /** required component passing like string */
  /** using image path,website url,username */
  title = 'HelloWorld'
  imageUrl = "../assets/Bridgelabzlogo.jpeg"
  url = "https://www.bridgelabz.com"
  userName=""
  nameError=""

  /** Oneway Databinding*/
  ngOnInit(): void {
    this.title ="Hello From Bridgelabzs"
  }

  /**Event Binding */
  onClick($event: any){
    console.log("Saved button is clicked!",$event);
    window.open(this.url,"_blank");
  }

  /**It reflects the changes in website directly in twoway binding */
  /** */
  onInput($event:any){
    console.log("change Event Occured!",$event.data);
    const nameRegex = RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}