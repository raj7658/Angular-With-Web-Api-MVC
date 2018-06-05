using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Community.Controllers
{
    public class UserController : ApiController
    {
        public UserController()
        {

        }
        public string GetData()
        {
            return "Success";
        }
    }
}
