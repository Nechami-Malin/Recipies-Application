using Microsoft.AspNetCore.Mvc;
using RecipesApi.Entities;

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController: ControllerBase
    {
        public static List<Category> categories = new List<Category>()
        {

            new Category(1,"Desserts", "path"),
            new Category(2,"Dairy", "path"),
            new Category(3,"Meat", "path")
        };
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }
    }
}
