import { MorseCodeService } from "./morse-code.service";

describe('Testing encode',()=>{
  it('can encode a plaintext',()=>{
    let service: MorseCodeService = new MorseCodeService();

    expect(service.encodeText('HALLO')).toBe('.... .- .-.. .-.. ---');
  });

  it('can handle multiple words',()=>{
    let service: MorseCodeService = new MorseCodeService();

    expect(service.encodeText('HALLO FLORIAN DERNTL')).toBe('.... .- .-.. .-.. --- / ..-. .-.. --- .-. .. .- -. / -.. . .-. -. - .-..');
  })
});

describe('Testing decode',()=>{
  it('can decode a morsecode',()=>{
    let service:MorseCodeService = new MorseCodeService();

    expect(service.decodeText('.... .- .-.. .-.. ---')).toBe('HALLO');
  });

  it('can handle invalid MorseCode',()=>{
    let service: MorseCodeService = new MorseCodeService();

    expect(service.decodeText('.......................')).toBe(undefined);
  })
});
