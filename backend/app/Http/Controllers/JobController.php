<?php

namespace App\Http\Controllers;
use App\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
     public function index()
     {
     
       $jobs = Job::all();
       return response()->json($jobs);
     }

     public function show($id)
     {
        $job = Job::find($id);
        return response()->json($job);
     }
}