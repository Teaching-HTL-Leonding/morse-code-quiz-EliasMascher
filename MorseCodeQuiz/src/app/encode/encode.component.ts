import { Component, OnInit } from '@angular/core';
import { MorseCodeService } from '../morse-code.service';



@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent{
  public inputText:string;
  public output:string
  constructor(public service:MorseCodeService) {
    this.inputText= '';
    this.output='';
   }

   public isInputValid():boolean{
    let isCorrect = false
    for (let i = 0; i < this.inputText.length; i++) {
      if((this.inputText.charCodeAt(i) >= 'A'.charCodeAt(0) && this.inputText.charCodeAt(i) <= 'Z'.charCodeAt(0)) || this.inputText.charCodeAt(i) === ' '.charCodeAt(0)){
        isCorrect = true;
      }else{
        isCorrect = false
      }
    }
    return isCorrect;
   }
}
