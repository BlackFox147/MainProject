﻿using MainProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MainProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //using (UserContextNew db = new UserContextNew())
            //{
            //    OneUser user1 = new OneUser { UserName = "login6", Email = "email6", Password = "pass7654" };
            //    OneUser user2 = new OneUser { UserName = "login7", Email = "email7", Password = "5678word09" };
            //    db.OneUsers.Add(user1);
            //    db.SaveChanges();
            //    db.OneUsers.Add(user2);
            //    db.SaveChanges();
            //    UserProfile profile1 = new UserProfile { Id = user1.Id };
            //    UserProfile profile2 = new UserProfile { Id = user2.Id };
            //    db.UserProfiles.Add(profile1);
            //    db.SaveChanges();
            //    db.UserProfiles.Add(profile2);
            //    db.SaveChanges();

            //    Instruction ins1 = new Instruction { Name = "Les1", UserProfile = profile1 };
            //    Instruction ins2 = new Instruction { Name = "Les2", UserProfile = profile2 };
            //    Instruction ins3 = new Instruction { Name = "Les3", UserProfile = profile1 };

            //    db.Instructions.AddRange(new List<Instruction> { ins1, ins2, ins3 });
            //    db.SaveChanges();

            //    //foreach (OneUser user in db.OneUsers.Include("Profile").ToList())
            //    //    Console.WriteLine("Name: {0}  Age: {1}  Login: {2}  Password: {3}",
            //    //            user.UserName, user.Profile.Age, user.Email, user.Password);
            //}

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