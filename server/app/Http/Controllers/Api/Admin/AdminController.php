<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use DB;

class AdminController extends Controller
{
	public function dashboard()
	{
		$users = DB::table('users')->count();
		$categories = DB::table('categories')->count();
		$products = DB::table('products')->count();
		$product_attributs = DB::table('product_attributs')->count();
		$orders = DB::table('orders')->count();
		$coupons = DB::table('coupons')->count();
		$payments = DB::table('payments')->count();

		return response()->json([
		   'users' => $users,
		   'categories' => $categories,
		   'products' => $products,
		   'products' => $products,
		   'product_attributs' => $product_attributs,
		   'orders' => $orders,
		   'coupons' => $coupons,
		   'payments' => $payments,
		], 200);
	}

	public function users()
	{
		$admins = DB::table('users')->where('role', 'Admin')->get();
		$users = DB::table('users')->where('role', 'User')->get();

		return response()->json([
		   'admins' => $admins,
		   'users' => $users,
		], 200);
	}
    public function profile(Request $request)
    {
		return response()->json([
		   'status' => 200,
		   'user' => Auth::user(),
		], 200);
    }
    public function update_profile(Request $request)
    {
    	error_reporting(0);
		// return $request->all();
		$admin = User::find(auth::user()->id);
		$admin->name = $request->name;
		$admin->email = $request->email;
		$admin->phone = $request->phone;

		if ($request->hasFile('image')){
			if ($admin->image) {unlink(public_path('backend/admin/profile/').$admin->image);}
		    $file1 = 'admin-'.time().'.'.$request->image->extension();
		    $request->image->storeAs('/admin/profile/', $file1, 'my_files');
		    $admin->image = $file1;
		}else{
		    $admin->image = $admin->image;
		}
		$admin->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Profile Updated Successfuly...',
		   'user' => $admin
		], 200);
    }
}
