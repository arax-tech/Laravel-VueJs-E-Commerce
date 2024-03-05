<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Coupon;

class CouponController extends Controller
{
    public function index(Request $request)
    {
    	$coupons = Coupon::get();
		return response()->json([
		   'status' => 200,
		   'coupons' => $coupons,
		], 200);
    }
    public function store(Request $request)
    {
    	// return $request->all();
		$coupon = new Coupon();
		$coupon->coupon_code  = $request->coupon_code;
		$coupon->amount  = $request->amount;
		$coupon->amount_type  = $request->amount_type;
		$coupon->expiry_date  = $request->expiry_date;
		$coupon->status  = $request->status;
		$coupon->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Coupon Create Successfuly...',
		], 200);
    }

    public function update(Request $request, $id)
    {
		$coupon = Coupon::find($id);
		$coupon->coupon_code  = $request->coupon_code;
		$coupon->amount  = $request->amount;
		$coupon->amount_type  = $request->amount_type;
		$coupon->expiry_date  = $request->expiry_date;
		$coupon->status  = $request->status;
		$coupon->save();
		return response()->json([
		   'status' => 200,
		   'message' => 'Coupon Update Successfuly...',
		], 200);
    }

    public function delete($id)
    {
    	
		Coupon::find($id)->delete();
		return response()->json([
		   'status' => 200,
		   'message' => 'Coupon Delete Successfuly...',
		], 200);
    }
}
