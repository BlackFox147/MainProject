using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class Material
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public int Number { get; set; }
        public int? ElementId { get; set; }
        public Element Element { get; set; }
    }
}