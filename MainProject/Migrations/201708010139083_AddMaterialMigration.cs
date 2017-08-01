namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMaterialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Materials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Data = c.String(),
                        ElementId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Elements", t => t.ElementId)
                .Index(t => t.ElementId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Materials", "ElementId", "dbo.Elements");
            DropIndex("dbo.Materials", new[] { "ElementId" });
            DropTable("dbo.Materials");
        }
    }
}
