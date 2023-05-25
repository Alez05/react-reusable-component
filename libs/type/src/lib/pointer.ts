export const cursorList = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  // Add more cursor styles here if needed
] as const

export type TCursorType = (typeof cursorList)[number]
