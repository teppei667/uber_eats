const DEFAULT_LOCALHOST = 'http://localhost:3000/api/v1'

export const restaurantsIndex = `${DEFAULT_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFAULT_LOCALHOST}/line_foods`;
export const line_foodsReplace = `${DEFAULT_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_LOCALHOST}/orders`;