@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <create-hotel-button></create-hotel-button>

                    <div class="card-header">
                        <strong class="card-title">Список Отелей</strong>
                    </div>

                    <hotel-list :cities="{{ json_encode($cities) }}"></hotel-list>
                </div>
            </div>


        </div>
    </div><!-- .animated -->
@endsection
