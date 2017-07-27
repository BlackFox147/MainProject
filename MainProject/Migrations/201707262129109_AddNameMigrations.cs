namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNameMigrations : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserProfiles", "FirstName", c => c.String());
            AddColumn("dbo.UserProfiles", "LastName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserProfiles", "LastName");
            DropColumn("dbo.UserProfiles", "FirstName");
        }
    }
}
