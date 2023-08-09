@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
            
                    <create-user-button></create-user-button>

                    <div class="card-header">
                        <strong class="card-title">Список Пользователей</strong>
                    </div>
                    
                    <user-list :roles="{{ json_encode($roles) }}"></user-list>
                </div>
            </div>
        </div>
    </div>
@endsection


