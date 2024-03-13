using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RecipesApi.Entities
{
  
    public class Category
    {
       
        public int Id { get; set; }
       
        public string Name { get; set; }
        public string Path { get; set; }

        public Category(int id, string name, string path)
        {
            Id = id;
            Name = name;
            Path = path;
        }
    }
}
