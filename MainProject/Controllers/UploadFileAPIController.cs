using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using WebApplication9.Controllers;
using System.IO;
using System.Data.Entity;
using MainProject.Models;

namespace MainProject.Controllers
{
    public class UploadFileAPIController : BaseAPIController
    {
        [HttpPost]
        public HttpResponseMessage UploadJsonFile()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    UserProfile profile2 = UsersDb.UserProfiles.FirstOrDefault(p => p.OneUser.Email == loggin.Email);

                    //loggin.Profile.UserImageName = Path.GetFileName(postedFile.FileName);
                    //UsersDb.Entry(loggin).State = EntityState.Modified;
                    if (profile2 != null)
                    {
                        profile2.UserImageName = Path.GetFileName(postedFile.FileName);
                        UsersDb.Entry(profile2).State = EntityState.Modified;
                        
                    }
                    var ss = UsersDb.SaveChanges();
                    var filePath = HttpContext.Current.Server.MapPath("~/images/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);
                }
                return ToJson(1);
            }
            return response;
        }
    }
}
//var postedFile = httpRequest.Files[file];

//int length = postedFile.ContentLength;


//loggin.Profile.UserImageName = Path.GetFileName(postedFile.FileName);
//                    UsersDb.SaveChanges();

//                    var fileSavePath = Path.Combine(HttpContext.Current.Server.MapPath("~/images"), postedFile.FileName);

////var filePath = HttpContext.Current.Server.MapPath("~/images/" + postedFile.FileName);
//postedFile.SaveAs(fileSavePath);
