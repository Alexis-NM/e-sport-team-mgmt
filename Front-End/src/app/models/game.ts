import { Style } from "./style";

export class Game {
  bannerimg: string;
  img: string;
  name: string;
  pegi: number;
  styles: Style[];
  year: string;

  constructor(
    bannerimg: string,
    img: string,
    name: string,
    pegi: number,
    styles: Style[],
    year: string
  ) {
    this.bannerimg = bannerimg;
    this.img = img;
    this.name = name;
    this.pegi = pegi;
    this.styles = styles;
    this.year = year;
  }
}
