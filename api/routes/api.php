<?php
use Illuminate\Http\Request;
use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\OTPController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\User\WorkerController as UserWorkerController;

Route::group(["prefix"=>"v0.1"], function(){
    Route::group(["prefix"=>"user"], function(){
        Route::post("signup", [UserController::class, "signup"]);
        Route::post("login", [UserController::class, "login"]);
        Route::post("loginEmail", [UserController::class, "loginEmail"]);
        Route::post("emailVerf", [OTPController::class, "sendOTP"]);
        Route::post("updatePassword", [UserController::class, "updatePassword"]);

        Route::group(["prefix"=>"worker"],function(){
            Route::get("{name}", [UserWorkerController::class, "getWorkerByName"]);
            Route::get("{categorie}", [UserWorkerController::class, "getWorkersByCategorie"]);
            Route::get("{location}", [UserWorkerController::class, "getWorkerByLocation"]);
        });
    });

    Route::group(["preifx"=>"notification"], function(){
        Route::post("add", [NotificationController::class, "addNotification"]);
        Route::post("delete", [NotificationController::class, "deleteNotification"]);
        Route::get("get/{user_id}", [NotificationController::class, "getNotificationByUserId"]);
    });

    Route::group(["prefix"=>"job"], function(){
        Route::post("add", [JobController::class, "addAppointment"]);
        Route::post("update", [JobController::class], "updateDateAndTime");
        Route::post("updateStatus", [JobController::class, "updateStatus"]);
        Route::post("delete", [JobController::class, "deleteAppointment"]);
        Route::get("get/{user_id}", [JobController::class, "getAllForUser"]);
        Route::get("get/{job_id}", [JobController::class, "getJobInfo"]);
    });
    
    Route::get("top5", [RatingController::class, "getTop5"]);
    
});