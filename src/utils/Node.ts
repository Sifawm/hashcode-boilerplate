export class Node<T> {
  constructor(
    public parent: Node<T>,
    public data: T,
    public children?: Node<T>[],
  ) {}
}