<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $catg = Categorie::where("worker_id",$request->worker_id)->where("categorie", $request->categorie);
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

    function getCategories(Request $request){
        $catgs = Categorie::where("worker_id", $request->worker_id)->get();
        return response()->json([
            "resp"=>$catgs
        ]);
    }
}