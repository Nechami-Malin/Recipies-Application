﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RecipesApi.Entities
{
    
    public class User
    {
        
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }

        public User(int id, string? name, string? address, string? email, string? password)
        {
            Id = id;
            Name = name;
            Address = address;
            Email = email;
            Password = password;
        }

        public override bool Equals(object? obj)
        {
            return obj is User user &&
                   Id == user.Id &&
                   Name == user.Name &&
                   Address == user.Address &&
                   Email == user.Email &&
                   Password == user.Password;
        }
    }
}
