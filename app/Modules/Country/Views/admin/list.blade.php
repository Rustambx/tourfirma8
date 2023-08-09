@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
            
                    <create-country-button></create-country-button>

                    <div class="card-header">
                        <strong class="card-title">Список Стран</strong>
                    </div>
                    
                    <country-list :countries="{{ json_encode($countries) }}"></country-list>
                </div>
            </div>
        </div>
    </div>
@endsection