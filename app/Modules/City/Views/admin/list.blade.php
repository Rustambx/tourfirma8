@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <create-city-button></create-city-button>

                    <div class="card-header">
                        <strong class="card-title">Список Городов</strong>
                    </div>
                    
                    <city-list :cities="{{ json_encode($cities) }}" :countries="{{ json_encode($countries) }}"></city-list>
                </div>
            </div>
        </div>
    </div>
@endsection
