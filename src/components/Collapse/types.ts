export interface collapseType {
  accordion?: boolean,
  list: Array<CollapseItem>[]
}

interface CollapseItem {
  title: string;
  content: string;
}