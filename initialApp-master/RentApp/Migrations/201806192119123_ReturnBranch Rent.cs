namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReturnBranchRent : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rents", "ReturnBranch_Id", c => c.Int());
            CreateIndex("dbo.Rents", "ReturnBranch_Id");
            AddForeignKey("dbo.Rents", "ReturnBranch_Id", "dbo.Branches", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Rents", "ReturnBranch_Id", "dbo.Branches");
            DropIndex("dbo.Rents", new[] { "ReturnBranch_Id" });
            DropColumn("dbo.Rents", "ReturnBranch_Id");
        }
    }
}
