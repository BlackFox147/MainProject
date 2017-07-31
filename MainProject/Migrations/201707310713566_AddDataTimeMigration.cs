namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDataTimeMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Instructions", "DataTimeChange", c => c.String());
            AddColumn("dbo.Steps", "DataTimeChange", c => c.String());
            DropColumn("dbo.Instructions", "MaxCount");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Instructions", "MaxCount", c => c.Int(nullable: false));
            DropColumn("dbo.Steps", "DataTimeChange");
            DropColumn("dbo.Instructions", "DataTimeChange");
        }
    }
}
