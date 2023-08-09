@extends('layouts.admin')

@section('content')
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
            
                    <create-news-button></create-news-button>

                    <div class="card-header">
                        <strong class="card-title">Список Новостей</strong>
                    </div>
                    
                    <news-list></news-list>
                </div>
            </div>
        </div>
    </div>
@endsection


