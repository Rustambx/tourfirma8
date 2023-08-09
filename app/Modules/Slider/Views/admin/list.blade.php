@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <create-slider-button></create-slider-button>

                    <div class="card-header">
                        <strong class="card-title">Список Слайдеров</strong>
                    </div>
                    
                    <slider-list :countries="{{ json_encode($countries) }}"></slider-list>
                </div>
            </div>
        </div>
    </div>
@endsection
