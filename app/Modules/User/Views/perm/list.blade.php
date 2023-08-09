@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <div class="card-header">
                        <strong class="card-title">Список Привилегии</strong>
                    </div>

                    <perm-list :roles="{{ json_encode($roles) }}"></perm-list>
                </div>
            </div>


        </div>
    </div><!-- .animated -->
@endsection
