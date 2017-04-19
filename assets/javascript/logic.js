$(document).ready(function(){

	var config = {
	    apiKey: "AIzaSyAZr12Sd8CCw2yvdbAOe8tYW_-9lK-Sb1A",
	    authDomain: "multiplayer-rps-670b2.firebaseapp.com",
	    databaseURL: "https://multiplayer-rps-670b2.firebaseio.com",
	    storageBucket: "multiplayer-rps-670b2.appspot.com",
	    messagingSenderId: "742944157747"
	};
	firebase.initializeApp(config);


	var database = firebase.database();
	var name, losses, wins;

	$(document).on("click", "#add-player", function(event){
		event.preventDefault();
		name = $("#player-name").val();
		$("#player-name").val('');

		console.log(name);
		losses = 0;
		wins = 0;

		database.ref('players/1').set({
			name: name,
			losses: losses,
			wins: wins
		});

		$("#greeting").empty();
		$("#greeting").innerHTML.append("Hi "+name+", you are Player 1!");

	});


//Chatbox Stuff
	$(document).on("click", "#chat-submit", function(event){
		event.preventDefault();

		var chatty = $("#chat").val().trim();
		$("#chat").empty();
		console.log(chatty);
		
		database.ref('chat').set({
			chat: chat,
		});


		$("#chat-box").append(chatty+"\n");
	});



	database.ref('chat').on("value", function(snapshot){
		console.log(snapshot);

	}, function(errorObject){
	  	console.log("Readfailed: " + errorObject.code)
	});
	/*
	Players
		1
			name
			losses
			wins
			move
		2
			name
			losses
			wins
			move

		//empty playbox until 2 players logged in
		
		//turn populates after 2 players log in
	turn
		1 player move wait 
		2 player move wait
		3 show who wins, timeout to set to 1. 

	Chats
		item
		item
		item etc...

		push player disconnected... 
	*/

});