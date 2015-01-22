using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PBDesk.EFRepository
{
    public class CustomEntityConfiguration<T> : EntityTypeConfiguration<T>     where T:  Entity
    {
        public CustomEntityConfiguration()
        {
            init(); 
        }

        public CustomEntityConfiguration(string tableName, string pkFieldName = "")
        {
            if (!string.IsNullOrWhiteSpace(tableName))
            {
                ToTable(tableName);
                init(pkFieldName);
            }
            else
            {
                throw new Exception("tableName cannot be null or empty");
            }
        }

        private void init(string pkFieldName  = "")
        {
            if(string.IsNullOrWhiteSpace(pkFieldName))
            {
                pkFieldName = "Id";
            }
            HasKey(x => x.Id);
            Property(x => x.Id).HasColumnName(pkFieldName).IsRequired().HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.IsActive).HasColumnName("IsActive"); ;
            Property(x => x.LastUpdBy).HasColumnName("LastUpdBy").HasMaxLength(256);
            Property(x => x.LastUpdDate).HasColumnName("LastUpdDate");
        }
    }
}
