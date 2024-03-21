using Microsoft.AspNetCore.Mvc;
using RecipesApi.Entities;

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController: ControllerBase
    {
        public static List<Recipe> recipes = new List<Recipe>()
        {
            new Recipe("Chocolate", 1, 60, 3, new DateTime(2004,1,1),
                new List<string>() { "eggs", "chocolate", "water", "oil", "cocoa" },
                new List<string>() { "melt chocolate", "Add the rest of the ingredients",
                    "boil in a pot", "to stir", "put in the oven", "eat with pleasure" }, 1, "../../assets/images/food/salad.png"),
            new Recipe("Chocolate", 2, 60, 4, new DateTime(2004,1,1),
                new List<string>() { "eggs", "chocolate", "water", "oil", "cocoa" },
                new List<string>() { "melt chocolate", "Add the rest of the ingredients",
                    "boil in a pot", "to stir", "put in the oven", "eat with pleasure" }, 2, "../../assets/images/food/salad.png")
        };
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return recipes;
        }
        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            var r = recipes.Find(x => x.CodeRecipe == id);
            if(r!=null)
            {
                return r;
            }
            return null;
        }
        [HttpPost]
        public bool Post([FromBody] Recipe r)
        {
            recipes.Add(r);
            return true;
        }
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody] Recipe value)
        {
            var recipe = recipes.Find(x => x.CodeRecipe == id);
            if (recipe != null)
            {
                recipe.CodeRecipe = value.CodeRecipe;
                recipe.Image = value.Image;
                recipe.NameRecipe = value.NameRecipe;
                recipe.Products = value.Products;
                recipe.Duration = value.Duration;
                recipe.CodeCategory = value.CodeCategory;
                recipe.Date = value.Date;
                recipe.Degree = value.Degree;
                recipe.CodeUser = value.CodeUser;
                return true;
            }
            return false;
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var course = recipes.Find(x => x.CodeUser == id);
            if (course != null)
            {
                recipes.Remove(course);
                return true;
            }
            return false;
        }
    }

}

