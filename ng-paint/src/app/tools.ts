export enum Tool {
  Rect,
  Brush,
  Eraser,
}
export const tools = Object.keys(Tool).filter(
  (k) => typeof Tool[k as any] === 'number'
);
