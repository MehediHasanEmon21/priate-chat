<?php

namespace App\Http\Controllers;

use App\User;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function user_list()
    {
        if (!\Request::ajax()) {
            return abort(404);
        }
        $users = User::latest()->where('id', '!=', Auth::user()->id)->get();
        return response()->json($users, 200);
    }

    public function user_message($id)
    {
        $user = User::find($id);
        $messages = Message::where(function ($q) use ($id) {
            $q->where('from', auth()->user()->id);
            $q->where('to', $id);
        })->orWhere(function ($q) use ($id) {
            $q->where('from', $id);
            $q->where('to', auth()->user()->id);
        })->with('user')->get();

        return response()->json([
            'messages' => $messages,
            'user' => $user
        ]);
    }
}
