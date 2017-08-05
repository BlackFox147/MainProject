using MainProject.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;


namespace WebApplication9.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected UserContextNew UsersDb = new UserContextNew();

        protected static OneUser loggin;
        protected static UserProfile profile;
        protected static int workStepId;


        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj, Formatting.None,
                        new JsonSerializerSettings()
                        {
                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                        }), Encoding.UTF8, "application/json");
            return response;
        }

        protected void DeleteElement(Element value,Step step)
        {
            for (var i = 0; i < step.Elements.Count; i++)
            {
                if (step.Elements.ElementAt(i).Number > value.Number)
                {
                    step.Elements.ElementAt(i).Number -= 1;
                }
            }

            UsersDb.Elements.Remove(value);
            var s = UsersDb.SaveChanges();
        }

        protected void DeleteStep(Step value,Instruction instruction)
        {
            for (var i = 0; i < instruction.Steps.Count; i++)
            {
                if (instruction.Steps.ElementAt(i).Number > value.Number)
                {
                    instruction.Steps.ElementAt(i).Number -= 1;
                }
            }

            int countEements = value.Elements.Count;
            for (var i = countEements - 1; i >= 0; i--)
            {
                DeleteElement(value.Elements.ElementAt(i),value);
            }
            UsersDb.Steps.Remove(value);
            var s = UsersDb.SaveChanges();            
        }

        protected void DeleteInstruction(Instruction value)
        {

            int countEements = value.Steps.Count;           
            
            for (var i = countEements - 1; i >= 0; i--)
            {
                DeleteStep(value.Steps.ElementAt(i),value);                
            }

            UsersDb.Instructions.Remove(value);
            var s = UsersDb.SaveChanges();
        }
    }
}
