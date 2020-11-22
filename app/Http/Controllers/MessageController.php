<?php

namespace App\Http\Controllers;

use App\User;
use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function user_list()
    {
        $users = User::latest()->get();
        return response()->json($users, 200);
    }
}
