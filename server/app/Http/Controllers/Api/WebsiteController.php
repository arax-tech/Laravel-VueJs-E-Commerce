<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductAttribut;
use App\Models\Category;
use App\Models\Product;
use Auth;

class WebsiteController extends Controller
{
    public function products(Request $request)
    {
        error_reporting(0);
        $products = Product::with('attributes')->get();
        foreach ($products as $key => $val)
        {
            $category_name = Category::where(['id' => $val->category_id])->first();
            $products[$key]->category_name = $category_name->name;
        }

        $categories = Category::where(['parent_id' => 0])->get();
        foreach ($categories as $key => $cat)
        {
            $sub_categories = Category::where(['parent_id' => $cat->id])->get();
            $categories[$key]->sub_categories = $sub_categories;
        }
        return response()->json([
           'status' => 200,
           'products' => $products,
           'categories' => $categories,
        ], 200);
    }


    public function product_detail($id)
    {
        error_reporting(0);
        $product = Product::with('attributes')->where('id', $id)->first();
        $category_name = Category::where(['id' => $product->category_id])->first();
        $product->category_name = $category_name->name;

        $releatedProducts = Product::with('attributes')->where('category_id', $product->category_id)->get();
        foreach ($releatedProducts as $key => $val)
        {
            $category_name1 = Category::where(['id' => $val->category_id])->first();
            $releatedProducts[$key]->category_name = $category_name1->name;
        }

        return response()->json([
           'status' => 200,
           'product' => $product,
           'releatedProducts' => $releatedProducts,
        ], 200);
    }

}
