export class MyApp {

  private url: string = '';
  private image = '';

  private formSubmit() {
    this.generate();
  }

  private async generate() {
    if (this.url.trim() !== '') {
      this.image = `https://www.qrtag.net/api/qr_4.png?url=${this.url}`;
    }
  }
}
