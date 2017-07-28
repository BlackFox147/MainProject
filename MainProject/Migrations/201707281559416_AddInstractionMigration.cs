namespace MainProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddInstractionMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Instructions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UserProfileId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.UserProfiles", t => t.UserProfileId)
                .Index(t => t.UserProfileId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Instructions", "UserProfileId", "dbo.UserProfiles");
            DropIndex("dbo.Instructions", new[] { "UserProfileId" });
            DropTable("dbo.Instructions");
        }
    }
}
