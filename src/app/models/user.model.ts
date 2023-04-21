import { environment } from 'src/environments/environment.development';

const base_url = environment.base_url;

export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public password?: string,
    public google?: boolean,
    public img?: string,
    public uid?: string
  ) {}

  get imageUrl() {
    if (this.img!.includes('https')) {
      return this.img;
    }

    if (this.img) {
      return `${base_url}/upload/usarios/${this.img}`;
    } else {
      return `${base_url}/upload/usarios/no-image`;
    }
  }
}
