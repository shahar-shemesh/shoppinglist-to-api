using System;
using System.Collections.Generic;

namespace shoppingListDOTNETAPI.Models;

public partial class Order
{
    public string Fullname { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string UserOrder { get; set; } = null!;
}
