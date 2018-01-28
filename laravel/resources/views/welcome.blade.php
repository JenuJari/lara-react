<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>{{ config('app.name', 'Laravel 5.5 with React 16 Boilerplate') }}</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

	<!-- Styles -->
	<link href="{{ mix('css/app.css') }}" rel="stylesheet">
	<!-- Scripts -->
	<script>
		window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
	</script>
</head>

<body>
	<div id="app">
		@yield('content')
	</div>

	<input type="hidden" id="base_url" value="{{ url('/') }}">		
	<!-- Scripts -->
	<script src="{{mix('/js/manifest.js')}}"></script>
	<script src="{{mix('/js/vendor.js')}}"></script>
	<script src="{{mix('/js/app.js')}}"></script>
</body>

</html>