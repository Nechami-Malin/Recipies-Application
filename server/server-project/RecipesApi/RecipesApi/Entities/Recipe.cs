using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RecipesApi.Entities
{
    
    public class Recipe
    {
        static int index = 1;
        public int CodeRecipe { get; set; }
        public string NameRecipe { get; set; }
        public int? CodeCategory { get; set; }
        public int Duration { get; set; }
        public int Degree { get; set; }
        public DateTime Date { get; set; }
        public List<string> Products { get; set; }
        public List<string> Instructions { get; set; }

        public int? CodeUser { get; set; }

       
        public string Image { get; set; }
        public Recipe()
        {

        }
        public Recipe(string name, int categoryId, int preparationTime, int difficultyLevel, DateTime dateAdded, List<string> ingredientsOfRecipe, List<string> preparationRecipe, int? userId, string image)
        {
            CodeRecipe = index++;
            NameRecipe = name;
            CodeCategory = categoryId;
            Duration = preparationTime;
            Degree = difficultyLevel;
            Date = dateAdded;
            Products = ingredientsOfRecipe;
            Instructions = preparationRecipe;
            CodeUser = userId;
            Image = image;
        }
    }
}
