/*

This is the code for a search engine which gives you emojis of fruits and other sorts of food in a JavaScript ChatBot Framework 'theaiplayground'...
Link is below to run the code:

https://theaiplayground.com/bot/new
*/


/*
Database:

1. Grapes
2.tangerine
3.lemon
4.banana
5.mango
6. red apple
7. green apple
8.pear
9.cherry
10.strawberry
11.kiwi
12.Tomato
13.coconut
14.avacado
15.egg
16.carrot
17.corn
18.pepper
19.cucumber
20.garlic
21.onion
22. mushroom
23. peanut
24. chestnut
25. bread
26.petzel
27.bagel 
28.pancake
29.waffle
30.bacon
31.watermelon
32.melon
 */
Bot.send("Welcome to DEmoji Food and Fruits Search Engine!");
async function respond(inputText) {
	if(inputText.search("grape") >= 0 || inputText.search("Grape") >= 0){
		Bot.send("🍇");
	}

	else if(inputText.search("tangerine") >= 0 || inputText.search("Tangerine") >= 0){
		Bot.send("🍊");
	}
	else if(inputText.search("lemon") >= 0 || inputText.search("Lemon") >= 0){
		Bot.send("🍋");
	}
	else if(inputText.search("banana") >= 0 || inputText.search("Banana") >= 0){
		Bot.send("🍌");
	}
		else if(inputText.search("mango") >= 0 || inputText.search("Mango") >= 0){
		Bot.send("🥭");
	}
		else if(inputText.search("apple") >= 0  || inputText.search("Apple") >= 0|| inputText.search("red apple") >= 0 || inputText.search("Red apple") >= 0 || inputText.search("Red Apple") >= 0 || inputText.search("red Apple") >= 0){
		Bot.send("🍎");
	}
		else if(inputText.search("green apple") >= 0 || inputText.search("green Apple") >= 0 || inputText.search("Green apple") >= 0 || inputText.search("Green Apple") >= 0){
		Bot.send("🍏");
	}
		else if(inputText.search("pear") >= 0 || inputText.search("Pear") >= 0){
		Bot.send("🍐");
	}
		else if(inputText.search("cherries") >= 0 || inputText.search("Cherries") >= 0 || inputText.search("cherry") >= 0 || inputText.search("Cherry") >= 0){
		Bot.send("🍒");
	}
		else if(inputText.search("strawberr") >= 0 || inputText.search("Strawberr") >= 0){
		Bot.send("🍓");
	}
		else if(inputText.search("kiwi") >= 0 || inputText.search("Kiwi") >= 0){
		Bot.send("🥝");
	}
		else if(inputText.search("tomato") >= 0 || inputText.search("Tomato") >= 0){
		Bot.send("🍅");
	}
		else if(inputText.search("coconut") >= 0 || inputText.search("Coconut") >= 0){
		Bot.send("🥥");
	}
		else if(inputText.search("avocado") >= 0 || inputText.search("Avocado") >= 0){
		Bot.send("🥑");
	}
		else if(inputText.search("egg") >= 0 && inputText.search("plant") >= 0){
		Bot.send("🍆");
	}
		else if(inputText.search("carrot") >= 0 || inputText.search("Carrot") >= 0){
		Bot.send("🥕");
	}
	    else if(inputText.search("Corn") >= 0 || inputText.search("corn") >= 0){
		Bot.send("🌽");
	}
		else if(inputText.search("pepper") >= 0 || inputText.search("Pepper") >= 0){
		Bot.send("🌶️");
	}
		else if(inputText.search("cucumber") >= 0 || inputText.search("Cucumber") >= 0){
		Bot.send("🥒");
	}
		else if(inputText.search("brocolli") >= 0 || inputText.search("Brocolli") >= 0){
		Bot.send("🥦");
	}
		else if(inputText.search("garlic") >= 0 || inputText.search("Garlic") >= 0){
		Bot.send("🧄");
	}
		else if(inputText.search("onion") >= 0 || inputText.search("Onion") >= 0){
		Bot.send("🧅");
	}
		else if(inputText.search("mushroom") >= 0 || inputText.search("Mushroom") >= 0){
		Bot.send("🍄");
	}
		else if(inputText.search("peanut") >= 0 || inputText.search("Peanut") >= 0){
		Bot.send("🥜");
	}
		else if(inputText.search("chestnut") >= 0 || inputText.search("Chestnut") >= 0){
		Bot.send("🌰");
	}
		else if(inputText.search("bread") >= 0 || inputText.search("Bread") >= 0){
		Bot.send("🍞");
	}
		else if(inputText.search("pretzel") >= 0 || inputText.search("Pretzel") >= 0){
		Bot.send("🥨");
	}
		else if(inputText.search("bagel") >= 0 || inputText.search("Bagel") >= 0){
		Bot.send("🥯");
	}
		else if(inputText.search("pancake") >= 0 || inputText.search("Pancake") >= 0){
		Bot.send("🥞");
	}
		else if(inputText.search("waffle") >= 0 || inputText.search("Waffle") >= 0){
		Bot.send("🧇");
	}
		else if(inputText.search("bacon") >= 0 || inputText.search("Bacon") >= 0){
		Bot.send("🥓");
	}
    else if(inputText.search("watermelon") >= 0 || inputText.search("Watermelon") >= 0){
		Bot.send("🍉");
	}
	else if(inputText.search("melon") || inputText.search("Melon")){
		Bot.send("🍈");
	}
	}
