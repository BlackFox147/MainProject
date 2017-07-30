namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStepNameMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Steps", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Steps", "Name");
        }
    }
}
