export default class PasswordGenerator {
  private pattern: string;
  private characters: string;

  constructor(pattern: string, characters: string) {
    this.pattern = pattern;
    this.characters = characters;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getString(length: number) {
    return Array(length)
      .fill("")
      .map(
        () =>
          this.characters[this.getRandomNumber(0, this.characters.length - 1)]
      )
      .join("");
  }

  public generate(length: number): string {
    let password: string = "";

    if (this.characters.length === 0) return password;

    while (true) {
      password = this.getString(length);
      console.log(password);
      const test: boolean = new RegExp(this.pattern).test(password);
      if (test) return password;
    }
  }
}
