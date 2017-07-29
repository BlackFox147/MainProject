namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStepMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Steps",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        InstructionId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Instructions", t => t.InstructionId)
                .Index(t => t.InstructionId);
            
            AddColumn("dbo.Instructions", "MaxCount", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Steps", "InstructionId", "dbo.Instructions");
            DropIndex("dbo.Steps", new[] { "InstructionId" });
            DropColumn("dbo.Instructions", "MaxCount");
            DropTable("dbo.Steps");
        }
    }
}
