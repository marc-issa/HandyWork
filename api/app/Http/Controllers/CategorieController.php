<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    function addCategorie(Request $request){
        $catg = new Categorie();
        $catg->worker_id = $request->worker_id;
        $catg->categorie = $request->catg;

        if($catg->save()){
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }

    function deleteCategorie(Request $request){
        $catg = Categorie::where("id",$request->catg_id);
        if($catg->delete()){
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