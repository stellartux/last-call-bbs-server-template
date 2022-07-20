declare const enum Color {
  BLACK,
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  WHITE,
}

/** Clear the screen. */
declare function clearScreen(): void

/**
 * Draw the specified text. The color parameter is a
 * number between 0 (darkest) and 17 (lightest).
 **/
declare function drawText(
  text: string,
  color: Color,
  x: number,
  y: number
): void

/**
 * Draw the specified text, wrapping it so that it is no
 * more than width characters wide.
 **/
declare function drawTextWrapped(
  text: string,
  color: Color,
  x: number,
  y: number,
  width: number
): void

/**
 * Draw a box using the built-in box drawing characters.
 **/
declare function drawBox(
  color: Color,
  x: number,
  y: number,
  width: number,
  height: number
): void

/**
 * Fill an area using the specified symbol.
 **/
declare function fillArea(
  symbol: string,
  color: Color,
  x: number,
  y: number,
  width: number,
  height: number
): void

/**
 * Write this server's persisted data string. You can
 * convert a JavaScript object to a JSON string using
 * `JSON.stringify()`.
 **/
declare function saveData(data: string): void

/**
 * Read this server's persisted data string. You can
 * convert a JSON string to a JavaScript object using
 * `JSON.parse()`.
 **/
declare function loadData(): string
