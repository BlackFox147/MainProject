namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SomeChangeMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Instructions", "UserName", c => c.String());
            AddColumn("dbo.UserProfiles", "UserName", c => c.String());
            DropColumn("dbo.Steps", "ImageName");
            DropColumn("dbo.Instructions", "ImageName");
            DropColumn("dbo.OneUsers", "UserName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.OneUsers", "UserName", c => c.String());
            AddColumn("dbo.Instructions", "ImageName", c => c.String());
            AddColumn("dbo.Steps", "ImageName", c => c.String());
            DropColumn("dbo.UserProfiles", "UserName");
            DropColumn("dbo.Instructions", "UserName");
        }
    }
}
