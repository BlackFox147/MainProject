using MainProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication9.Controllers;

namespace MainProject.Controllers
{
    public class BuildElementAPIController : BaseAPIController
    {
        public HttpResponseMessage Put(int id, Element value)
        {
            int aaa = 0;

            UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();
            return ToJson(s);
        }


        [HttpPost]
        public HttpResponseMessage UploadJsonFile()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                Step step = UsersDb.Steps.Include("Elements").FirstOrDefault(p => p.Id == workStepId);

                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                   
                                      

                    //loggin.Profile.UserImageName = Path.GetFileName(postedFile.FileName);
                    //UsersDb.Entry(loggin).State = EntityState.Modified;
                    if (step != null)
                    {
                        Element elem = new Element { Number = step.Elements.Count + 1, BlockType = 2, Step = UsersDb.Steps.FirstOrDefault(p => p.Id == workStepId) };
                        elem.Data = Path.GetFileName(postedFile.FileName);

                        UsersDb.Elements.Add(elem);
                        var ss = UsersDb.SaveChanges();

                        var filePath = HttpContext.Current.Server.MapPath("~/images/" + elem.Data);
                        postedFile.SaveAs(filePath);

                        step.DataTimeChange = DateTime.Now.ToString();
                        UsersDb.Entry(step).State = EntityState.Modified;
                        ss = UsersDb.SaveChanges();
                    }                  
                    
                }
                return ToJson(step);
            }
            return response;
        }
    }

    
}
