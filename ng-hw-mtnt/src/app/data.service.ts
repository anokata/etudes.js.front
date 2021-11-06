export class DataService {
  private data: string[] = ["AB", "CD"];

  getData(): string[] {
    return this.data;
  }

  addData(name: string) {
    this.data.push(name);
  }
}
