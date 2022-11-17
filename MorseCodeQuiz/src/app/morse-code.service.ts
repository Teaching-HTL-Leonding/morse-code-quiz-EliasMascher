import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MorseCodeService {
  public morseCode;
  public alphabeth;
  constructor() {
    this.alphabeth = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    this.morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];
  }

  public decodeText(inputMorseCode: string): string|undefined {
    let input: string[] = [];
    let index: number = 0;
    let plainOutput: string = '';
    inputMorseCode = inputMorseCode.trim();
    input = inputMorseCode.split(' ');

    for (let i = 0; i < input.length; i++) {
      if (input[i] === '/') {
        plainOutput += ' ';
      }else {
        index = this.morseCode.indexOf(input[i]);
        if(index === -1){
          return undefined;
        }
        plainOutput += this.alphabeth[index];
      }
    }
    return plainOutput;
  }

  public encodeText(inputText: string): string {
    let output: string = '';
    let help: number;
    let wasBlankBefore = false;
    inputText = inputText.trim();
    //HALLO ELIAS
    for (let i = 0; i < inputText.length; i++) {
      if (inputText.charCodeAt(i) === ' '.charCodeAt(0) && !wasBlankBefore) {
        wasBlankBefore = true;
        output += '/ ';
      } else {
        help = inputText.charCodeAt(i) - 'A'.charCodeAt(0);
        output += this.morseCode[help] + ' ';
        wasBlankBefore = false;
      }
    }
    return output.trimEnd();
  }
}
