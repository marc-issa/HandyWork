<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function signup(Request $request){
        $username_auth = User::where("username", $request->username)->first();
        $email_auth = User::where("email", $request->email)->first();
        if($username_auth!=null){
            return response()->json([
                "resp"=>"username-exists"
            ]);
        }
        if($email_auth!=null){
            return response()->json([
                "resp"=>"email-exists"
            ]);
        }else{
            $user = new User;
            $user->username = $request->username;
            $user->first_name = $request->fname;
            $user->last_name = $request->lname;
            $user->email = $request->email;
            $user->address = $request->address;
            $user->password = bcrypt($request->password);

            if($user->save()){
                return response()->json([
                    "resp"=>true
                ]);
            }
            return response()->json([
                "resp"=>false
            ]);
            
        }
    }
}