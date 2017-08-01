namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddElementMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Elements",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BlockType = c.Int(nullable: false),
                        StepId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Steps", t => t.StepId)
                .Index(t => t.StepId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Elements", "StepId", "dbo.Steps");
            DropIndex("dbo.Elements", new[] { "StepId" });
            DropTable("dbo.Elements");
        }
    }
}
