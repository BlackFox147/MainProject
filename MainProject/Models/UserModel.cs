using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MainProject.Models
{

    public class OneUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public UserProfile Profile { get; set; }
    }


    public class UserProfile
    {
        [Key]
        [ForeignKey("OneUser")]
        public int Id { get; set; }

        public int Age { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public OneUser OneUser { get; set; }
        public string UserImageName { get; set; }

    }
}