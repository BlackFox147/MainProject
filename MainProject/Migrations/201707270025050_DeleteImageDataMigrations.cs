namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteImageDataMigrations : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.UserProfiles", "UserImageData");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserProfiles", "UserImageData", c => c.Binary());
        }
    }
}
