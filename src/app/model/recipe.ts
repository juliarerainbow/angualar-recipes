export interface Recipe {
  createdAt: number
  name: string
  ingredients: string[]
  description: string
  url: string
  category: DishType
  id?: string
  rating:number
}



export enum DishType{
  antipasto,
  primo,
  secondo,
  contorno,
  dessert,
  cocktail

}

//se l'associazione della categori non segue una regola precisa
// export enum DishType{
//   antipasto=3,
//   primo=27,
//   secondo=5782,
//   contorno,
//   dessert,
//   cocktail

// }


//se la categori fossero anche delle stringhe
// export enum DishType{
//   antipasto = 'appetizer',
//   primo='first_course',
//   secondo ='second_course',
//   contorno='side_dish',
//   dessert,
//   cocktail

// }