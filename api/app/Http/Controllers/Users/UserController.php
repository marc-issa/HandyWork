<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
                    "resp"=> $user->id
                ]);
            }
            return response()->json([
                "resp"=>false
            ]);   
        }
    }

    function login(Request $request){
        $user = User::where("username", $request->username)->first();
        if($user!=null){
            if(Hash::check($request->password, $user->password)){
                return response()->json([
                    "resp"=> $user->id
                ]);
            }else{
                return response()->json([
                    "resp"=> "wrong-password"
                ]);
            }
        }else{
            return response()->json([
                "resp"=>"wrong-username"
            ]);
        }
    }

    function loginEmail(Request $request){
        $user = User::where("email", $request->email)->first();
        if($user!=null){
            if(Hash::check($request->password, $user->password)){
                return response()->json([
                    "resp"=> $user->id
                ]);
            }else{
                return response()->json([
                    "resp"=> "wrong-password"
                ]);
            }
        }else{
            return response()->json([
                "resp"=>"wrong-email"
            ]);
        }
    }
}