const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type : String,
        required: "Please Enter Product Name",
    },

    productPrice:{
        type : String,
        required: "Please Enter Product Price",
    },

    productQuantity:{
        type : String,
        required: "Please Enter Product Quantity",
    },

    dateCreated: {
        type: Date,
        default: Date.now(),
      },
      dateUpdated: {
        type: Date,
        default: Date.now(),
      },
    

});

module.exports = mongoose.model("Product" , productSchema);

