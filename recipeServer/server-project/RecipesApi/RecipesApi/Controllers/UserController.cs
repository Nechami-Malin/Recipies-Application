using Microsoft.AspNetCore.Mvc;
using RecipesApi.Entities;

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController: ControllerBase
    {
        public static List<User> users = new List<User>()
        {
             new User(1, "yn", "Moliver21", "y0556779585@gmail.com", "1111")
          
        };
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }
        [HttpPost]
        [Route("Login")]
        public int Login(UserLogin ul)
        {
            if (users.Where((u) => u.Name == ul.Name && u.Password ==ul.Password ).Any())
            {
                //המשתמש קיים. מעבר לדף המתכונים
                return 1;
            }
            if (users.Where((u) => u.Name == ul.Name).Any())
            {
                //המשתמש קיים אך הססמא שגויה.
                //נציג הודעה להכניס סיסמא מדויקת
                return 2;
            }
            //המשתמש לא קיים!! נעביר אותו לדף של הרישום
            return 0;
        }

        [HttpPost]
        [Route("Register")]
        public bool Register([FromBody] User user)
        {
            if (users.Where((u) => u.Equals(user)).Any()) {
              return  false;
            }
            users.Add(user);    
             return true;
        }

    }
}
