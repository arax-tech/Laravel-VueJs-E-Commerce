<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\User;
use Auth;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
    	error_reporting(0);
    	$categories = Category::get();
    	foreach ($categories as $key => $value) {
    		$parent = Category::where('id', $value->parent_id)->first();
    		$categories[$key]->parent_category = $parent->name;
    	}


    	$parents_categories = Category::where(['parent_id' => 0])->get();
    	foreach ($parents_categories as $key1 => $cat)
    	{
    	    $sub_categories = Category::where(['parent_id' => $cat->id])->get();
    	    $parents_categories[$key1]->sub_categories = $sub_categories;
    	}
		return response()->json([
		   'status' => 200,
		   'categories' => $categories,
		   'parents_categories' => $parents_categories,
		], 200);
    }
    public function store(Request $request)
    {
    	error_reporting(0);
		$category = new Category();
		$category->parent_id = $request->parent_id ? $request->parent_id : 0;
		$category->name = $request->name;
		$category->slug = $request->slug;
		$category->status = $request->status;
		if ($request->hasFile('image')){
		    $file1 = 'category-'.time().'.'.$request->image->extension();
		    $request->image->storeAs('/admin/category/', $file1, 'my_files');
		    $category->image = $file1;
		}
		$category->save();
		
		

		return response()->json([
		   'status' => 200,
		   'message' => 'Category Create Successfuly...',
		], 200);
    }

    public function update(Request $request, $id)
    {
    	// return $request->all();
    	error_reporting(0);
		$category = Category::find($id);
		$category->parent_id = $request->parent_id ? $request->parent_id : 0;
		$category->name = $request->name;
		$category->slug = $request->slug;
		$category->status = $request->status;
		if ($request->hasFile('image')){
			if ($category->image) {unlink(public_path('backend/admin/category/').$category->image);}
		    $file1 = 'category-'.time().'.'.$request->image->extension();
		    $request->image->storeAs('/admin/category/', $file1, 'my_files');
		    $category->image = $file1;
		}else{
		    $category->image = $category->image;
		}
		$category->save();

		

		return response()->json([
		   'status' => 200,
		   'message' => 'Category Update Successfuly...',
		], 200);
    }

    public function delete($id)
    {
    	error_reporting(0);
		$category = Category::find($id);
		if ($category->image) {unlink(public_path('backend/admin/category/').$category->image);}
		Category::find($id)->delete();

	

		return response()->json([
		   'status' => 200,
		   'message' => 'Category Delete Successfuly...',
		], 200);
    }
}
