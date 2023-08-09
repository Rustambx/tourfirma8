@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <create-gallery-button></create-gallery-button>

                    <div class="card-header">
                        <strong class="card-title">Список Галереи</strong>
                    </div>

                    <gallery-list :tours="{{ json_encode($tours) }}"></gallery-list>
                </div>
            </div>


        </div>
    </div><!-- .animated -->
@endsection
