using Microsoft.EntityFrameworkCore;
using shoppingListDOTNETAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ShoppinglistDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("dbConnection")));


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


//Enable CORS
app.UseCors(c => c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
