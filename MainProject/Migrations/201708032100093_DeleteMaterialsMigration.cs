namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteMaterialsMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Materials", "ElementId", "dbo.Elements");
            DropIndex("dbo.Materials", new[] { "ElementId" });
            AddColumn("dbo.Elements", "Data", c => c.String());
            AddColumn("dbo.Instructions", "ImageName", c => c.String());
            DropColumn("dbo.Instructions", "UserImageName");
            DropTable("dbo.Materials");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Materials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Data = c.String(),
                        Number = c.Int(nullable: false),
                        ElementId = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Instructions", "UserImageName", c => c.String());
            DropColumn("dbo.Instructions", "ImageName");
            DropColumn("dbo.Elements", "Data");
            CreateIndex("dbo.Materials", "ElementId");
            AddForeignKey("dbo.Materials", "ElementId", "dbo.Elements", "Id");
        }
    }
}
