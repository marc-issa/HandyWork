<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\OTPController;

Route::group(["prefix"=>"v0.1"], function(){
    Route::group(["prefix"=>"user"], function(){
        Route::post("signup", [UserController::class, "signup"]);
        Route::post("login", [UserController::class, "login"]);
        Route::post("emailVerf", [OTPController::class, "sendOTP"]);
        Route::post("updatePassword", [UserController::class, "updatePassword"]);
    });
});