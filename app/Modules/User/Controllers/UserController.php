<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\RBAC\Models\Role;
use App\Modules\User\Requests\UserRequest;
use App\Modules\User\Resources\RoleResource;
use App\Modules\User\Resources\UserResource;
use User;

class UserController extends AdminController
{
    public function index()
    {   
        if (!auth()->user()->can('VIEW_ADMIN_USERS')) {
            return back()->with(['error' => 'У вас нет прав для списка пользователей']);
        }

        $rolesAll = Role::all();
        $roles = RoleResource::collection($rolesAll);

        return view('user::list', compact('roles'));
    }
    
    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_USERS')) {
                return back()->with(['error' => 'У вас нет прав для удаление пользователя']);
            }
        }

        return User::destroy($id);
    }

    public function save(UserRequest $request)
    {
        return User::save($request);
    }

    public function all()
    {
        $usersAll = User::all();
        $users = UserResource::collection($usersAll);
        
        return $users;
    }
}
