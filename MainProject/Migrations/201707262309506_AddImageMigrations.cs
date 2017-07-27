namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddImageMigrations : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserProfiles", "UserImageName", c => c.String());
            AddColumn("dbo.UserProfiles", "UserImageData", c => c.Binary());
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserProfiles", "UserImageData");
            DropColumn("dbo.UserProfiles", "UserImageName");
        }
    }
}
