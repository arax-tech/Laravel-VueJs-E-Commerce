<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductAttribut;
use App\Models\Product;
use App\Models\User;
use Auth;

class ProductAttributeController extends Controller
{
    public function single($id)
    {
    	$product_attributes = ProductAttribut::where('product_id', $id)->get();
		return response()->json([
		   'status' => 200,
		   'product_attributes' => $product_attributes,
		], 200);
    }
    public function store(Request $request)
	{
		error_reporting(0);
	    foreach ($request['size'] as $key => $value) {
            $atributes = new ProductAttribut();
            $atributes->product_id = $request->product_id;
            $atributes->size = $value;
            $atributes->color = $request['color'][$key];
            $atributes->price = $request['price'][$key];
            $atributes->stock = $request['stock'][$key];
            
            if ($request->hasFile('image') && !empty($request->file('image')[$key])) {
                $image = $request->file('image')[$key];
                $file1 = 'product-' . $key . '-' . time() . '.' . $image->extension();
                $image->storeAs('/admin/products/', $file1, 'my_files');
                $atributes->image = $file1;
            }
            $atributes->save();
	    }
	    return response()->json([
	        'status' => 200,
	        'message' => 'Product Attribute Create Successfully...',
	    ], 200);
	}

    public function update(Request $request, $id)
    {
    	// return $request->all();
		$atribute = ProductAttribut::find($id);
		$atribute->color  = $request->color;
		$atribute->size = $request->size;
		$atribute->price = $request->price;
		$atribute->stock = $request->stock;

		if ($request->hasFile('image')){
			if ($atribute->image) {unlink(public_path('backend/admin/products/').$atribute->image);}
		    $file1 = 'product-'.time().'.'.$request->image->extension();
		    $request->image->storeAs('/admin/products/', $file1, 'my_files');
		    $atribute->image = $file1;
		}else{
		    $atribute->image = $atribute->image;
		}

		$atribute->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Product Atribute Update Successfuly...',
		], 200);
    }

    public function delete($id)
    {
    	error_reporting(0);
    	$atribute = ProductAttribut::find($id);
		if ($atribute->image) {unlink(public_path('backend/admin/products/').$atribute->image);}
		ProductAttribut::find($id)->delete();
		return response()->json([
		   'status' => 200,
		   'message' => 'Product Atribute Delete Successfuly...',
		], 200);
    }
}
