@extends('layouts.app')

@section('content')
    <div class="grid_12">
        <h3 class="mtop20">{{ $country->title }}</h3>
        <div class="blog">

            <div class="clear"></div>
            <img src="{{ asset('storage/' . $country->img) }}" alt="{{ $country->title }}" class="img_inner fleft mr10">
            {!! $country->detail_text !!}

            <div class="o-section">
                <div id="tabs" class="c-tabs no-js">
                    <div class="c-tabs-nav">
                        <a href="#" class="c-tabs-nav__link is-active">
                            <span>Туры</span>
                        </a>
                        <a href="#" class="c-tabs-nav__link">
                            <span>Города</span>
                        </a>
                        <a href="#" class="c-tabs-nav__link">
                            <span>Отели</span>
                        </a>
                    </div>
                    <div class="c-tab is-active">
                        @foreach($arResult['tours'] as $tour)
                            <div class="c-tab__content">
                                <a href="{{ route('tours.show', $tour->id) }}"><img src="{{ asset('storage/' . $tour->img) }}" alt="{{ $tour->title }}" class="for_tabs fleft"></a>
                                <h1><a href="{{ route('tours.show', $tour->id) }}">{{ $tour->title }}</a></h1>
                                {!! substr($tour->detail_text, 0, 300) !!}
                                <a href="{{ route('tours.show', $tour->id) }}" class="link1">Подробнее</a>
                            </div>
                        @endforeach
                    </div>
                    <div class="c-tab">
                        @foreach($arResult['cities'] as $city)
                            <div class="c-tab__content">
                                <a href="{{ route('cities.show', $city->id) }}"><img src="{{ asset('storage/' . $city->img) }}" alt="{{ $city->title }}" class="for_tabs fleft"></a>
                                <h1><a href="{{ route('cities.show', $city->id) }}">{{ $city->title }}</a></h1>
                                {!! $city->preview_text !!}
                                <a href="{{ route('cities.show', $city->id) }}" class="link1">Подробнее</a>
                            </div>
                        @endforeach
                    </div>
                    <div class="c-tab">
                        @foreach($arResult['hotels'] as $hotel)
                            <div class="c-tab__content">
                                <a href="{{ route('hotels.show', $hotel->id) }}"><img src="{{ asset('storage/' . $hotel->img) }}" alt="" class="for_tabs fleft"></a>
                                <h1><a href="{{ route('hotels.show', $hotel->id) }}">{{ $hotel->title }}</a></h1>
                                {!! substr($hotel->detail_text, 0, 300) !!}
                                <a href="{{ route('hotels.show', $hotel->id) }}" class="link1">Подробнее</a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>

            <a href="{{ route('countries.index') }}" class="link1 mt">К списку</a>
        </div>

    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
