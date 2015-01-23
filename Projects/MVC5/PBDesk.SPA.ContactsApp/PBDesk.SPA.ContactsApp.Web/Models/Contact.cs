using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PBDesk.SPA.ContactsApp.Web.Models
{
	public class Contact
	{
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }
		public string Email { get; set; }
		public string Phone { get; set; }
	}
}