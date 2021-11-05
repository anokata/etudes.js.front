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

  game: GameItem = new GameItem("Default Name", "action", 60.99);

  games: GameItem[] = [];
  genres: string[] = ["action", "jrpg", "startegy", "casual"];

  addGameItem() {
    this.games.push(
      new GameItem(this.game.name, this.game.genre, this.game.price)
    );
  }

  toggleTextClass() {
    this.isColoredText = !this.isColoredText;
    console.log(this.isColoredText);
  }

  constructor() {}

  ngOnInit(): void {}
}
