using MainProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace MainProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (UserContextNew db = new UserContextNew())
            {
                //OneUser user1 = new OneUser { UserName = "login6", Email = "email6", Password = "pass7654" };
                //OneUser user2 = new OneUser { UserName = "login7", Email = "email7", Password = "5678word09" };


                //db.OneUsers.Add(user1);
                //db.SaveChanges();
                //db.OneUsers.Add(user2);
                //db.SaveChanges();
                //UserProfile profile1 = new UserProfile { Id = user1.Id };
                //UserProfile profile2 = new UserProfile { Id = user2.Id };
                //db.UserProfiles.Add(profile1);
                //db.SaveChanges();
                //db.UserProfiles.Add(profile2);
                //db.SaveChanges();



                //Step ins1 = db.Steps.FirstOrDefault(p => p.Id == 53);
                //Element step1 = new Element { BlockType = 1, Step = ins1 };
                //Element step2 = new Element { BlockType = 1, Step = ins1 };


                //db.Entry(ins1).State = EntityState.Modified;
                //db.Elements.AddRange(new List<Element> { step1, step2 });
                //db.SaveChanges();

                //Material mat1 = new Material { Data= "Material_1", Element = step1 };
                //Material mat2 = new Material { Data = "Material_2", Element = step2 };

                //db.Entry(step1).State = EntityState.Modified;
                //db.Entry(step2).State = EntityState.Modified;
                //db.Materials.AddRange(new List<Material> { mat1, mat2 });
                //db.SaveChanges();



                //foreach (OneUser user in db.OneUsers.Include("Profile").ToList())
                //    Console.WriteLine("Name: {0}  Age: {1}  Login: {2}  Password: {3}",
                //            user.UserName, user.Profile.Age, user.Email, user.Password);
            }

            //DateTime date1 = DateTime.Today;
            //var time = date1.ToShortDateString();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}