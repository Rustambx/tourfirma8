<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\RBAC\Models\Permission;
use App\Modules\RBAC\Models\Role;
use App\Modules\User\Resources\PermResource;
use Illuminate\Http\Request;
use User;

class PermissionController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('CHANGE_PERMISSIONS')) {
            return back()->with(['error' => 'У вас нет прав для редактирование привилегии']);
        }

        $roles = Role::all();
        $perms = Permission::all();


        return view('user::perm.index', compact('roles', 'perms'));
    }

    public function store(Request $request)
    {
        return User::savePermissions($request);
    }
}
