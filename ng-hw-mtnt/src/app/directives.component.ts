import { Component, OnInit } from "@angular/core";

class GameItem {
  constructor(
    public name: string,
    public genre: string,
    public price: number
  ) {}
}

@Component({
  selector: "directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"],
})
export class DirectivesComponent implements OnInit {
  isColoredText: boolean = false;

  name: string = "";
  genre: string = "";
  price: number = 0.0;

  games: GameItem[] = [];
  genres: string[] = ["action", "jrpg", "startegy", "casual"];

  addGameItem() {
    this.games.push(new GameItem(this.name, this.genre, this.price));
  }

  toggleTextClass() {
    this.isColoredText = !this.isColoredText;
    console.log(this.isColoredText);
  }

  constructor() {}

  ngOnInit(): void {}
}
