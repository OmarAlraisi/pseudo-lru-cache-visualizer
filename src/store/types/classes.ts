import { DirectionEnum } from "./constants";

export class CacheBit {
  direction: number;
  left: CacheBit | CacheBlock | null;
  right: CacheBit | CacheBlock | null;
  toggleDirection: Function;
  constructor() {
    this.direction = DirectionEnum.LEFT;
    this.left= null;
    this.right = null;

    /* 
      Could be written as
        this.toggleDirection = () => this.direction = parseInt(!this.direction);
      But for the sake of having clean and consistent code it is written as
    */
    this.toggleDirection = () => {
      if (this.direction === DirectionEnum.LEFT) this.direction = DirectionEnum.RIGHT;
      else this.direction = DirectionEnum.LEFT;
    }
  }
}

export class CacheBlock {
  key: string;
  constructor() {
    this.key = "";
  }
}