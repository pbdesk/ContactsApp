using PBDesk.SPA.ContactsApp.Web.Models;
using System;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;


namespace PBDesk.SPA.ContactsApp.Web.Migrations
{
    
    internal sealed class Configuration : DbMigrationsConfiguration<PBDesk.SPA.ContactsApp.Web.Models.ContactsAppContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PBDesk.SPA.ContactsApp.Web.Models.ContactsAppContext context)
        {
			//  This method will be called after migrating to the latest version.

			//  You can use the DbSet<T>.AddOrUpdate() helper extension method 
			//  to avoid creating duplicate seed data. E.g.
			//
			//    context.People.AddOrUpdate(
			//      p => p.FullName,
			//      new Person { FullName = "Andrew Peters" },
			//      new Person { FullName = "Brice Lambson" },
			//      new Person { FullName = "Rowan Miller" }
			//    );
			//

			context.Contacts.AddOrUpdate( p=> p.Id,
				new Contact() { Id=1, Name="ABCD" },
				new Contact() { Id = 2, Name = "Qwer" },
				new Contact() { Id = 3, Name = "Pqrs" },
				new Contact() { Id = 4, Name = "Zxcv" }
                );
        }
    }
}
