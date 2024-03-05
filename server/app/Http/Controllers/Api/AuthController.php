<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\JsonResponse;
class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
	{
	    $check = User::where('email', $request->email)->count();
	    if ($check < 1) {
    		$user = New User();
    	    $user->name = $request->name;
    	    $user->email = $request->email;
    	    $user->password = Hash::make($request->password);
    	    $user->save();

    	    return response()->json([
    	       'status' => 200,
    	       'message'=> 'Registration Successfully...'
    	    ]);
	    }else{
	    	return response()->json([
	    	   'status' => 401,
	    	   'message'=> 'Email already taken, Please use another email...'
	    	],401);
	    }
	}
	   
    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
        	return response()->json([
	    	   'status' => 200,
	    	   'message'=> 'Login Successfully...',
	    	   'user' => Auth::user(),
	    	   'token' => Auth::user()->createToken('main')->plainTextToken,
	    	], 200);
        } 
        else{
        	return response()->json([
	    	   'status' => 401,
	    	   'message'=> 'Invalid Email OR Password...',
	    	], 401);
        } 
    }

    public function logout(Request $request): JsonResponse
    {
        // Logout from All Devices
        Auth::user()->tokens()->delete();
        
        // Logout from Current Device
        // Auth::user()->currentAccessToken()->delete();
    	return response()->json([
    	   'status' => 200,
    	   'message'=> 'Logout Successfully...',
    	], 200);
    }

    
}
