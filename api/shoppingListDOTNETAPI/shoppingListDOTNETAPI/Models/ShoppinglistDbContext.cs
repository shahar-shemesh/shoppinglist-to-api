using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace shoppingListDOTNETAPI.Models;

public partial class ShoppinglistDbContext : DbContext
{
    public ShoppinglistDbContext()
    {
    }

    public ShoppinglistDbContext(DbContextOptions<ShoppinglistDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Order> Orders { get; set; }



    /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:shoppinglist-server.database.windows.net,1433;Initial Catalog=shoppinglistDB;Persist Security Info=False;User ID=shoppinglistadmin;Password=qwerty!1;MultipleActiveResultSets=False;Encrypt=True;");
*/


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Value).HasName("PK__categori__40BBEA3B01B7E329");

            entity.ToTable("categories");

            entity.Property(e => e.Value)
                .HasMaxLength(200)
                .UseCollation("Hebrew_CI_AS")
                .HasColumnName("value");
            entity.Property(e => e.Name)
                .HasMaxLength(200)
                .UseCollation("Hebrew_CI_AS")
                .HasColumnName("name");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PK__orders__AB6E6165F388AAA6");

            entity.ToTable("orders");

            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .HasColumnName("email");
            entity.Property(e => e.Address)
                .HasMaxLength(45)
                .HasColumnName("address");
            entity.Property(e => e.Fullname)
                .HasMaxLength(50)
                .HasColumnName("fullname");
            entity.Property(e => e.UserOrder)
                .HasMaxLength(255)
                .HasColumnName("userOrder");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
