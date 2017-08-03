using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class Instruction
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string DataTimeChange { get; set; }
        public string ImageName { get; set; }
        public int? UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }

        public ICollection<Step> Steps { get; set; }

        public Instruction()
        {
            Steps = new List<Step>();
        }
    }
}