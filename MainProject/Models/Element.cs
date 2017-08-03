using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class Element
    {
        public int Id { get; set; }
        public int BlockType { get; set; }
        public int Number { get; set; }
        public string Data { get; set; }
        public int? StepId { get; set; }
        public Step Step { get; set; }

    }
}