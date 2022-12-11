<?php

use App\Http\Controllers\CategorieController;
use Illuminate\Http\Request;
use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\Users\WorkerController as UserWorkerController;

Route::group(["prefix"=>"v0.1"], function(){
    Route::group(["prefix"=>"user"], function(){
        Route::post("signup", [UserController::class, "signup"]);
        Route::post("login", [UserController::class, "login"]);
        Route::post("loginEmail", [UserController::class, "loginEmail"]);
        Route::post("delete", [UserController::class, "deleteUser"]);
        Route::post("forgot", [UserController::class, "forgotPassword"]);

        Route::group(["prefix"=>"edit"], function(){
            Route::post("username", [UserController::class, "editUsername"]);
            Route::post("fname", [UserController::class, "editFname"]);
            Route::post("lname", [UserController::class, "editLname"]);
            Route::post("email", [UserController::class, "editEmail"]);
            Route::post("address", [UserController::class, "editAddress"]);
            Route::post("password", [UserController::class, "editPassword"]);
        });
    });

    Route::group(["prefix"=>"worker"],function(){
        Route::post("add", [UserWorkerController::class, "addWorker"]);
        Route::post("delete", [UserWorkerController::class, "deleteWorker"]);
        Route::post("get", [UserWorkerController::class, "getCategories"]);

        Route::group(["prefix"=>"edit"], function(){
            Route::post("hr", [UserWorkerController::class, "editHr"]);
        });

        Route::group(["prefix"=>"categorie"], function(){
            Route::post("add", [CategorieController::class, "addCategorie"]);
            Route::post("delete", [CategorieController::class, "deleteCategorie"]);
            Route::post("get", [CategorieController::class, "getCategories"]);
        });

        Route::group(["prefix"=>"find"], function(){
            Route::get("getAll", [UserWorkerController::class, "getAll"]);
            Route::get("username/{username}", [UserWorkerController::class, "getWorkerByUsername"]);
            Route::get("address/{address}", [UserWorkerController::class, "getWorkerByLocation"]);
        });
    });

    Route::group(["prefix"=>"notification"], function(){
        Route::post("add", [NotificationController::class, "addNotification"]);
        Route::post("delete", [NotificationController::class, "deleteNotification"]);
        Route::get("get/{user_id}", [NotificationController::class, "getNotificationByUserId"]);
    });

    Route::group(["prefix"=>"job"], function(){
        Route::post("add", [JobController::class, "addJob"]);
        Route::post("update", [JobController::class, "updateDateAndTime"]);
        Route::post("updateStatus", [JobController::class, "updateStatus"]);
        
        Route::group(["prefix"=>"get"], function(){
            Route::get("user/{user_id}", [JobController::class, "getAllForUser"]);
            Route::get("job/{job_id}", [JobController::class, "getJobInfo"]);
        });
    });
    
    Route::group(["prefix"=>"rate"], function(){
        Route::post("add", [RatingController::class, "addRating"]); 
        Route::get("top", [RatingController::class, "getTop"]);
        Route::get("{worker_id}", [RatingController::class, "getRating"]);
        
        
    });
    
    
});