<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Worker;
use App\Models\Categorie;

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
                    "resp"=> $user
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
                    "resp"=> $user
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
                    "resp"=> $user
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

    function forgotPassword(Request $request){
        $user = User::where("email", $request->email);
        if($user->update(["password"=>bcrypt($request->password)])){
            return response()->json([
                "resp"=> true
            ]);
        }else{
            return response()->json([
                "resp"=> false
            ]);
        }
       
    }

    function editUsername(Request $request){
        $username_auth = User::where("username", $request->username)->first();
        if($username_auth!=null){
            return response()->json([
                "resp"=>"username-exists"
            ]);
        }else{
            $user = User::where("id", $request->id);
            if($user->update(["username"=>$request->username])){
                return response()->json([
                    "resp"=> true
                ]);
            }else{
                return response()->json([
                    "resp"=> false
                ]);
            }
            
        }
    }

    function editFname(Request $request){
        $user = User::where("id", $request->id);
        if($user->update(["first_name"=>$request->fname])){
            return response()->json([
                "resp"=> true
            ]);
        }else{
            return response()->json([
                "resp"=> false
            ]);
        }
        
    }

    function editLname(Request $request){
        $user = User::where("id", $request->id);
        if($user->update(["last_name"=>$request->lname])){
            return response()->json([
                "resp"=> true
            ]);
        }else{
            return response()->json([
                "resp"=> false
            ]);
        }
        
    }

    function editEmail(Request $request){
        $email_auth = User::where("email", $request->email)->first();
        if($email_auth!=null){
            return response()->json([
                "resp"=>"email-exists"
            ]);
        }else{
            $user = User::where("id", $request->id);
            if($user->update(["email"=>$request->email])){
                return response()->json([
                    "resp"=> true
                ]);
            }else{
                return response()->json([
                    "resp"=> false
                ]);
            }
            
        }
    }

    function editAddress(Request $request){
        $user = User::where("id", $request->id);
        if($user->update(["address"=>$request->address])){
            return response()->json([
                "resp"=> true
            ]);
        }else{
            return response()->json([
                "resp"=> false
            ]);
        }
       
    }

    function editPassword(Request $request){
        $user = User::where("id", $request->id);
        if($user->update(["password"=>bcrypt($request->password)])){
            return response()->json([
                "resp"=> true
            ]);
        }else{
            return response()->json([
                "resp"=> false
            ]);
        }
       
    }

    function deleteUser(Request $request){
        $user = User::where("id", $request->id);
        if($user->delete()){
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }
}