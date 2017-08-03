namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNumberMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Elements", "Number", c => c.Int(nullable: false));
            AddColumn("dbo.Materials", "Number", c => c.Int(nullable: false));
            AddColumn("dbo.Steps", "ImageName", c => c.String());
            AddColumn("dbo.Instructions", "UserImageName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Instructions", "UserImageName");
            DropColumn("dbo.Steps", "ImageName");
            DropColumn("dbo.Materials", "Number");
            DropColumn("dbo.Elements", "Number");
        }
    }
}
