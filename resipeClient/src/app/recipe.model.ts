// , שם מתכון, קוד קטגוריה, זמן הכנה בדקות, דרגת קושי 1-5 , תאריך הוספת המתכון לאתר, 
// רשימת הרכיבים (אוסף מחרוזות), אופן ההכנה (אוסף מחרוזות), קוד משתמש שהכניס את המתכון, תמונה (מחרוזת של ניתוב).
export class Recipe{
 codeRecipe!:number
nameRecipe!:string
codeCategory!: number
duration!:number
degree!:number
date!: Date
products!:string[]
instructions!:string[]
codeUser!:number
image!:string
}


