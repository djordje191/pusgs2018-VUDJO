namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IsAcceptedIsProcessedAppUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AppUsers", "IsAccepted", c => c.Boolean(nullable: false));
            AddColumn("dbo.AppUsers", "IsProcessed", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AppUsers", "IsProcessed");
            DropColumn("dbo.AppUsers", "IsAccepted");
        }
    }
}
