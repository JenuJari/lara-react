<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// default name space for all routes is 'App\Http\Controllers\Api'


Route::post('auth/register', 'Auth\RegisterController@register')->name('auth.register');
Route::post('auth/login', 'Auth\LoginController@login')->name('auth.login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => 'auth:api'], function() {

    //Route::patch('/users/{id}', 'UserController@update')->name('users.update');

    //Route::resource('articles', 'ArticleController', ['except' => ['edit', 'create']]);

    Route::delete('auth/logout', 'Auth\LoginController@logout')->name('auth.logout');;
});
