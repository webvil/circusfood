const items = [
    { id: "1", title: 'Pancakes', image: 'item1.jpg', rating: 5, price: '250', content: "egg, ham, cheese, mushrooms", info: 'These unique pancakes are a perfect Mothers Day recipe to surprise your mom with. Whether breakfast in bed or around a campground picnic table our Swedish pancakes are sure to please!', group: "main-cource-menu" },
    { id: "2", title: 'Meatballs', image: 'item2.jpg', rating: 4, price: '175', content: "pork, beef, potatoes, cream", info: 'Swedish meatballs! Meatballs truly are a classic Swedish dish to serve either as an everyday meal or as a more fancy dinner option.', group: "main-cource-menu" },
    { id: "3", title: 'Kalops', image: 'item3.jpg', rating: 5, price: '265', content: "beef, berries, peppercorns, garlic", info: 'Kalops is a traditional Swedish beef stew that is slowly cooked with vegetables and spices, most notably allspice berries which gives it its distinct flavor. ', group: "main-cource-menu" },
    { id: "4", title: 'Gravlax', image: 'item4.jpg', rating: 3, price: '130', content: "salmon, sugar, dill, pepper", info: 'Gravlax translates to “grave salmon” or “trench salmon” though I like the imagery of “grave salmon” because it gives you full permission to serve this for a Halloween party. Originally, it described salmon that was preserved by burying it in the sand and allowing it to ferment.', group: "main-cource-menu" },
    { id: "5", title: 'Chicken lingonberry', image: 'item5.jpg', rating: 3, price: '100', content: "chicken, lingonberry, pepper, mustard", info: 'Chicken thighs get a quick roast under a peppery glaze of lingonberry preserves. Whole grain mustard added at the end makes for a sweet and tangy pan sauce. Simple smashed red potatoes and sauteed garlicky spinach round out the colorful meal.', group: "main-cource-menu" },
    { id: "6", title: 'Roasted Duck Legs in a Red Wine Sauce', image: 'item6.jpg', rating: 2, price: '99', content: "duck, rosemary, garlic", info: 'Order our specialty Peking duck and watch your duck being roasted to crispy and juicy perfection in Kitchen’s vertical grill. Once it has the ideal amber luster, your duck will be carved tableside and served with classic condiments for a mouthwateringly authentic gourmet experience. ', group: "main-cource-menu" },
  
    { id: "7", title: 'Roasted Cabbage Steaks With Crispy Chickpeas and Herby Croutons', image: 'veg-item1.jpg', rating: 5, price: '250', content: "chickpeas, pepper, mustard, mayonnaise", info: 'When roasted at high temperature, humble cabbage becomes sweet and incredibly satisfying. In this recipe, the cabbage ‘steaks’ are a base for crispy chickpeas, herby croutons, and a rich and lemony garlic sauce.', group: "veg-cource-menu" },
    { id: "8", title: 'Crispy Tofu With Maple-Soy Glaze', image: 'veg-item2.jpg', rating: 4, price: '175', content: "tofu, maple syrup, soy sauce, pepper", info: 'Our simple technique of draining before frying makes the tofu extra-crispy, and perfect for absorbing the salty-sweet flavors of maple syrup, soy sauce, and fresh ginger.', group: "veg-cource-menu" },
    { id: "9", title: 'Creamy Squash Risotto With Toasted Pepitas', image: 'veg-item3.jpg', rating: 5, price: '265', content: "arborio rice, pepitas, parsley, pepper", info: 'Silky miso and a paprika-packed squash purée makes this dairy-free risotto hearty and satisfying. Double or triple the squash purée, and use it in other meals throughout the week—we like stirring it into soup and turning it into a pasta sauce.', group: "veg-cource-menu" },
    { id: "10", title: 'Winter Salad Hummus Bowls', image: 'veg-item4.jpg', rating: 3, price: '130', content: "salmon, sugar, dill, pepper", info: 'Ever since Anna Stockwell developed this easy weeknight vegetarian dinner recipe, we have had it in our regular rotation. Smear each bowl with store-bought (or homemade) hummus, add a quick, sturdy salad, top with crunchy Power Sprinkle , and add an egg.', group: "veg-cource-menu" },
    { id: "11", title: 'One-Skillet Roasted Butternut Squash with Spiced Chickpeas', image: 'veg-item5.jpg', rating: 2, price: '100', content: "butternut squash, garlic, chickpeas, pepper", info: 'No need to struggle slicing unruly butternut squash. Roast it whole first, then tear or cut it into portions and sear in a big skillet to caramelize.', group: "veg-cource-menu" },
    { id: "12", title: 'Beans and Guacamole', image: 'veg-item6.jpg', rating: 1, price: '99', content: "sweet potatoes, spinach, avocado, cayenne pepper", info: 'This easy vegetarian dinner uses a spice-rubbed sweet potato in place of rice as a canvas for all your favorite burrito toppings.', group: "veg-cource-menu" },
  
    { id: "13", title: 'Jungle Bird', image: 'drink-item1.jpg', rating: 5, price: '250', content: "blackstrap rum, pineapple juice, Campari, lime", info: 'This easy tiki cocktail is in our hall of fame. Its refreshing and balanced and juicy, thanks to a pour of bitter Campari and fresh pineapple in the mix. Do not let another week go by without trying one. ', group: "drink-cource-menu" },
    { id: "14", title: 'Islay and Olive', image: 'drink-item2.jpg', rating: 4, price: '175', content: "olives, vodka, Islay Scotch, vermouth", info: 'This batched cocktail is a super-savory take on the dirty martini. You can make a bottle and drop it off at Dads door if you arent spending Fathers Day together, or send him home with cocktails to go for the days ahead.', group: "drink-cource-menu" },
    { id: "15", title: 'Spicy Citrus Refresher', image: 'drink-item3.jpg', rating: 5, price: '265', content: "oranges, jalapeños, sugar, soda", info: 'This big batch of jalapeño-spiced orange-lime juice keeps in the fridge for a couple of days. Pour it over ice and top it with seltzer for a refreshing alcohol-free pick-me-up, or stir a splash of rum into your serving for a cocktail.  ', group: "drink-cource-menu" },
    { id: "16", title: 'Classic Daiquiri', image: 'drink-item4.jpg', rating: 3, price: '130', content: "ight rum, lime, simple syrup", info: 'Nothing like the ubiquitous frozen drinks that bear the same name, this classic cocktail is light, refreshing, and the perfect easy cocktail to while away the summer hours.', group: "drink-cource-menu" },
    { id: "17", title: 'Lipstick Memory', image: 'drink-item5.jpg', rating: 2, price: '100', content: "Cranberry Juice , rosemary, sparkling wine, Rosemary Juice", info: 'If you like your cocktails bold and tart, this cranberry-Campari drink will be your new Thanksgiving signature. Add extra aroma by grazing the rosemary garnish over the flame of your gas stove.', group: "drink-cource-menu" },
    { id: "18", title: 'Padova Spritz', image: 'drink-item6.jpg', rating: 1, price: '99', content: "chinotto soda, red verjus, orange twist, pitted olive", info: 'Dont forget the nonalcoholic drinks this Thanksgiving? This bitter, refreshing spritz is great with an olive garnish… and some salty pre-dinner snacks on the side.', group: "drink-cource-menu" },
  
    { id: "19", title: 'Grapefruit Bars with Candied Zest', image: 'kid-item1.jpg', rating: 5, price: '99', content: "sugar, grapefruit, eggs, lemon", info: 'When you think of cookie bars (or bar cookies!), lemon bars probably come to mind. But youve been missing out if you havent tried other citrus bars, like these gorgeous, zingy grapefruit bars.', group: "child-cource-menu" },
    { id: "20", title: 'Coconut-Date Power Breakfast Bars', image: 'kid-item2.jpg', rating: 4, price: '99', content: "Medjool dates, oats, shredded coconut, lime", info: 'Cookie bars for breakfast? Sure, when theyre these snacky, coconut-covered bar cookies.', group: "child-cource-menu" },
    { id: "21", title: 'Tin Roof Ice Cream', image: 'kid-item3.jpg', rating: 5, price: '99', content: "whole milk, sugar, heavy cream, vanilla extract, peanuts", info: 'Tin roof sundaes are usually made of vanilla ice cream topped with chocolate sauce and a scattering of peanuts. But here, its all incorporated into the scoop itself—chocolate-covered peanuts are embedded in layers of fudge ripple.', group: "child-cource-menu" },
    { id: "22", title: 'Boozy Piña Colada Ice Cream', image: 'kid-item4.jpg', rating: 3, price: '99', content: " pineapple chunks, Talenti, Maraschino cherries", info: 'No ice cream maker? No problem. Here, store-bought coconut ice cream gets a sunny, boozy kick from a pineapple and rum swirl inspired by our favorite beach-side cocktail.', group: "child-cource-menu" },
    { id: "23", title: 'Chicken Teriyaki', image: 'kid-item5.jpg', rating: 3, price: '99', content: "chicken, mirin, radishes, vinegar", info: 'Served with a bright, refreshing radish salad, these salty, sweet, and shatteringly crisp glazed thighs will satisfy all your classic chicken teriyaki cravings.', group: "child-cource-menu" },
    { id: "24", title: 'Grilled Steak and Mixed Peppers', image: 'kid-item6.jpg', rating: 3, price: '99', content: "strip steaks, pepper, extra-virgin olive oil, Flaky sea salt", info: 'Quickly charred shishito peppers and mixed mini sweet peppers flavored with just salt, pepper, and olive oil are a sweet and smoky topping for grilled strip steaks', group: "child-cource-menu" },
  ];
  