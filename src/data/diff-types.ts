export interface DiffItem {
  topic: string;
  type: 'added' | 'modified' | 'removed';
  oldRule: string;
  newRule: string;
  impactNote: string;
}

export interface DecreeDiffData {
  decreeId: string;
  title: string;
  category: string;
  compareWith: string;
  summary: string;
  items: DiffItem[];
}
