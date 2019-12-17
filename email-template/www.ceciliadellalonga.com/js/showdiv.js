$(document).ready(function() {

	$(".plus").click(function () {
	  if ( $( "#projectstag" ).is( ":hidden" ) ) {
	    $( "#projectstag" ).slideDown( "slow" );
	  } 
	  else {
	    $( "#projectstag" ).slideUp( "slow" );
	  }
	});

});

