<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Auth
Route::group(['namespace' => 'App\Http\Controllers\Api', 'prefix' => 'website'], function (){
	Route::get('products', 'WebsiteController@products');
	Route::get('product/{id}', 'WebsiteController@product_detail');
});

// Auth
Route::group(['namespace' => 'App\Http\Controllers\Api', 'prefix' => 'auth'], function (){
	Route::post('login', 'AuthController@login');
	Route::post('register', 'AuthController@register');
});

Route::group(['namespace' => 'App\Http\Controllers\Api', 'prefix' => 'auth', 'middleware' => 'auth:sanctum'], function (){
	Route::get('logout', 'AuthController@logout');
});

// Admin
Route::group(['namespace' => 'App\Http\Controllers\Api\Admin', 'prefix' => 'admin', 'middleware' => ['auth:sanctum', 'Admin']], function (){
	Route::get('/dashboard', 'AdminController@dashboard');
	Route::get('/users', 'AdminController@users');
	Route::get('/profile', 'AdminController@profile');
	Route::post('/update/profile', 'AdminController@update_profile');

	Route::get('/password', 'PasswordController@password');
	Route::get('/check-pwd', 'PasswordController@check');
	Route::post('/update/password', 'PasswordController@update_password');
	
	// Categories
	Route::get('/category', 'CategoryController@index');
	Route::post('/category/store', 'CategoryController@store');
	Route::post('/category/update/{id}', 'CategoryController@update');
	Route::get('/category/delete/{id}', 'CategoryController@delete');

	// Products
	Route::get('/product', 'ProductController@index');
	Route::post('/product/store', 'ProductController@store');
	Route::post('/product/update/{id}', 'ProductController@update');
	Route::get('/product/delete/{id}', 'ProductController@delete');

	// Coupons
	Route::get('/coupon', 'CouponController@index');
	Route::post('/coupon/store', 'CouponController@store');
	Route::post('/coupon/update/{id}', 'CouponController@update');
	Route::get('/coupon/delete/{id}', 'CouponController@delete');

	// Products
	Route::get('/product/attribute/single/{id}', 'ProductAttributeController@single');
	Route::post('/product/attribute/store', 'ProductAttributeController@store');
	Route::post('/product/attribute/update/{id}', 'ProductAttributeController@update');
	Route::get('/product/attribute/delete/{id}', 'ProductAttributeController@delete');
});
