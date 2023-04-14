const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apifeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apifeature.query;

    res.status(200).json({
        success: true,
        products,
        productCount
        });
});

exports.testing = catchAsyncErrors(async (req, res) => {

    res.status(200).json({success: true, message: 'Working Fine'});
});

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(200).json({success: true, product});

});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not Found'
        })
    }

    product = await Product.findByIdAndUpdate({id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({ status: true, product})
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({ success: true, message: "Product Deleted Successfully" })
});


exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product not found", 404));

    }

    res.status(200).json({success: true, product})
});