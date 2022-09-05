import { DirectionEnum } from "./constants";

export class CacheBit {
  direction: number;
  up: CacheBit | CacheBlock | null;
  down: CacheBit | CacheBlock | null;
  toggleDirection: Function;
  constructor() {
    this.direction = DirectionEnum.UP;
    this.up = null;
    this.down = null;

    /* 
      Could be written as
        this.toggleDirection = () => this.direction = parseInt(!this.direction);
      But for the sake of having clean and consistent code it is written as
    */
    this.toggleDirection = () => {
      if (this.direction === DirectionEnum.UP) this.direction = DirectionEnum.DOWN;
      else this.direction = DirectionEnum.UP;
    }
  }
}

export class CacheBlock {
  key: string;
  constructor() {
    this.key = "";
  }
}