export interface Control {
  id: number;
  name: string;
  type: 'button' | 'slider';
  createdAt: Date;
  updatedAt: Date;
}
