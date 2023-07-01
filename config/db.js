const mongoose = require("mongoose");
const DB = "mongodb+srv://layanshboul:layan123@cluster0.dvap2an.mongodb.net/tradehubDB?retryWrites=true&w=majority";

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},async(err,result)=>
	{
		if(err) console.log("lll")
		else{
			console.log("MongoDB connected");
			const fetched_data=await mongoose.connection.db.collection("collection");
			fetched_data.find({}).toArray(async function(err,data){
				
				const category = await mongoose.connection.db.collection("itemsCategories");
                category.find({}).toArray(function(err,catData)
				{
					if (err) console.log(err);
					else
				     {
					global.collection = data;
					global.itemsCategories = catData;

				      }
				      })



				// if (err) console.log(err);
				// else
				// {
				// 	global.collection = data;
				// console.log(global.collection)

				// }
			})
			
		}
	}
	)





	
	// .then(() => {
	// 	console.log("Connected to MongoDB");
	// 	// Start the server after successful database connection
	
	// })
	// .catch((error) => {
	// 	console.error("Error connecting to MongoDB:", error);
	// });
	