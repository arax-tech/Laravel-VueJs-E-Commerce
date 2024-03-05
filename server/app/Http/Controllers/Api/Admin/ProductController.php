<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductAttribut;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Auth;

class ProductController extends Controller
{
    public function index(Request $request)
    {
    	$products = Product::get();
    	foreach ($products as $key => $val)
    	{
    		$category_name = Category::where(['id' => $val->category_id])->first();
    		$products[$key]->category_name = $category_name->name;
    	}
		return response()->json([
		   'status' => 200,
		   'products' => $products,
		], 200);
    }
    public function store(Request $request)
    {
    	// return $request->all();
		$product = new Product();
		$product->category_id  = $request->category_id;
		$product->name = $request->name;
		$product->on_sale = $request->on_sale;
		$product->off_percentage = $request->off_percentage;
		$product->future = $request->future;
		$product->status = $request->status;
		$product->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Product Create Successfuly...',
		], 200);
    }

    public function update(Request $request, $id)
    {
		$product = Product::find($id);
		$product->category_id  = $request->category_id;
		$product->name = $request->name;
		$product->on_sale = $request->on_sale;
		$product->off_percentage = $request->off_percentage;
		$product->future = $request->future;
		$product->status = $request->status;
		$product->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Product Update Successfuly...',
		], 200);
    }

    public function delete($id)
    {
    	error_reporting(0);
		$attributs = ProductAttribut::where('product_id', $id)->get();
		foreach ($attributs as $attrib) {
			if ($attrib->image) {unlink(public_path('backend/admin/products/').$attrib->image);}
		}
    	
		Product::find($id)->delete();
		return response()->json([
		   'status' => 200,
		   'message' => 'Product Delete Successfuly...',
		], 200);
    }
}
