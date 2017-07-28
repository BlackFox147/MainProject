﻿using MainProject.Models;
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
    }
}
