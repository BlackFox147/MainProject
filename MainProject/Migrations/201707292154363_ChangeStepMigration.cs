namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeStepMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Steps", "Number", c => c.Int(nullable: false));
            DropColumn("dbo.Steps", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Steps", "Name", c => c.String());
            DropColumn("dbo.Steps", "Number");
        }
    }
}
