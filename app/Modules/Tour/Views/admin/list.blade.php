@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <create-tour-button></create-tour-button>

                    <div class="card-header">
                        <strong class="card-title">Список Туров</strong>
                    </div>

                    <tour-list :hotels="{{ json_encode($hotels) }}" :types="{{ json_encode($types) }}"></tour-list>
                </div>
            </div>


        </div>
    </div><!-- .animated -->
@endsection
