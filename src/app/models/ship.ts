export class ship {
  public size: number = 1;
  public hitPoints: number = 0;
  public isSunk(): boolean {
    if (this.hitPoints >= this.size) {
      return true;
    } else {
      return false;
    }
  }
}
