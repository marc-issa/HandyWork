<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    function addRating(Request $request){
        $find_worker = Rating::where("worker_id", $request->worker_id)->first();
        if($find_worker!=null){
            $rating_sum = $find_worker->rating_sum;
            $num_of_rating = $find_worker->num_of_rating;

            $rating_sum=$rating_sum+$request->rate;
            $num_of_rating++;

            $new_rating = Rating::where("worker_id", $request->worker_id);

            if($new_rating->update(["num_of_rating"=>$num_of_rating]) && $new_rating->update(["rating_sum"=>$rating_sum])){
                $new_rating->touch();
                return response()->json([
                    "resp"=>true
                ]);
            }else{
                return response()->json([
                    "resp"=>false
                ]);
            }
        }else{
            $rate = new Rating;
            $rate->worker_id = $request->worker_id;
            $rate->rating_sum = $request->rate;
            $rate->num_of_rating = 1;
            
            if($rate->save()){
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
}