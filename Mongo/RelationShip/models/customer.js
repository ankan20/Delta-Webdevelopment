const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

main()
.then(()=>{
    console.log("Db conected");
})
.catch(err => console.log(err));

const orderSchema =new  mongoose.Schema({
    item:String,
    price:Number
});

const customerSchema = new mongoose.Schema({
    username:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})


// customerSchema.pre("findOneAndDelete",async (req,res,next)=>{
//     console.log("Pre middleware");
// })

customerSchema.post("findOneAndDelete",async (customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : {$in : customer.orders}});
        console.log(res);
    }
})



const Order = mongoose.model("Order",orderSchema);

const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async ()=>{
    let cust1 = new Customer({
        username:"Ankan Das",
    });
    let order1 = await Order.findOne({item:"biriyani"});
    let order2 = await Order.findOne({item:"pakora"})
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let res =await cust1.save();
    console.log(res);
}
//addCustomer()


const delCust = async()=>{
    let data = await Customer.findByIdAndDelete("65d767a0ad61caa2dcb86634")
    console.log(data);
}

delCust();


const addOrders = async ()=>{
    let res = await Order.insertMany([{
        item:"samosa",
        price:10
    },
    {
        item:"biriyani",
        price:85
    },
    {
        item:"pakora",
        price:30
    }
    
])
    console.log(res);
}

// addOrders();






