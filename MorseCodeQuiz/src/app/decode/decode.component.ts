import { Component, OnInit } from '@angular/core';
import { MorseCodeService } from '../morse-code.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {
  public inputMorseCode: string;
  public plainOutput: string;
  public printError:boolean;
  constructor(public service: MorseCodeService) {
    this.inputMorseCode = '';
    this.plainOutput = '';
    this.printError = false;
  }

  public onButtonDecode(){
    if(this.service.decodeText(this.inputMorseCode) === undefined){
      this.printError = true;
    }else{
      this.plainOutput = this.service.decodeText(this.inputMorseCode) as string;
    }
  }

  public inputIsValid(): boolean {
    let isCorrect: boolean = false;
    this.inputMorseCode.trimStart();
    this.inputMorseCode.trimEnd();
    for (let i = 0; i < this.inputMorseCode.length; i++) {
      if (
        (this.inputMorseCode.charCodeAt(i) >= '-'.charCodeAt(0) &&
          this.inputMorseCode.charCodeAt(i) <= '/'.charCodeAt(0)) ||
        this.inputMorseCode.charCodeAt(i) === ' '.charCodeAt(0)
      ) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
    }
    return isCorrect;
  }
}
