using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Timers;

namespace RentApp.Hubs
{
    [HubName("notifications")]
    public class NotificationsHub : Hub
    {
        private static IHubContext hubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationsHub>();
        private static Timer t = new Timer();
        public static  bool serviceIsAdded = true;
        public static bool userIsAdded = true; 

        public void Hello()
        {
            Clients.All.hello();
        }

        public void GetRealTime()
        {
            Clients.All.setRealTime(DateTime.Now.ToString("h:mm:ss tt"));
        }

        public void NotifyUserIsAdded()
        {
            if(userIsAdded)
            {
                Clients.All.newUserAdded("New user is added...");
                userIsAdded = false;
            }
            else
            {
                Clients.All.newUserAdded("");
            }
        }

        public void NotifyServiceIsAdded()
        {
            if(serviceIsAdded)
            {
                Clients.All.newUserAdded("New service is added...");
                serviceIsAdded = false;
            }
            else
            {
                Clients.All.newUserAdded("");
            }
        }
    }
}