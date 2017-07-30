using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class Step
    {
        public int Id { get; set; }
        public int Number { get; set; }

        public string Name { get; set; }
        public int? InstructionId { get; set; }
        public Instruction Instruction { get; set; }
    }
}