# comp20-spring2015-team10

#Extreme Makeover Tufts Dining Edition

* Problem statement:
  * The Tufts dining website is lacking in user-friendliness and information availability and could use a major site overhaul. We want to improve the website for both better convenience and access to nutritional information.

* How do we solve the problem:
  * Create a user-interface that makes both meal and nutritional info more readily available to the student body.

  * Can click on the food listings to pull up nutritional information about them.

  * Remake the dining website so that it more logically displays meals in terms of time of day (breakfast, lunch, etc.) and in terms of type of food (vegetarian, vegan, normal).

  * Vegan/vegetarian foods can be displayed in a different color or format.

* Features:

  * We will be using Flask for server-side data persistence

  * We will do client-side data persistence with web SQL

  * Front-end framework will be made using Bootstrap

  * We will use the Flickr API to store images of the menu items for a better visual display of that day's menu. Users can choose to send in their own photos, so that the burden of images lies with the individual users (also introduces an element of interactivity) to the application.

  * We will also make use of the Twilio API for getting information about today's menus when the user doesn't have internet access, through the use of SMSes. There would be a different SMS number for Dewick and Carmichael dining centers.

  * We will use data scraping to take the nutritional information for the individual food items from the existent Tufts websites. This information will pop up once the user clicks on/selects the given menu item.

  * The app/website will display more important items near the top, i.e. entrees, specialty items, and the most popular items.

* Data to be used/collected:
  * Collect nutritional information and menu listings from the existing dining websites.

  * Collect user rankings for individual dishes, as well as images and/or reviews of dishes

  * Collect feedback from users for the Dining Services staff members instead of using the paper suggestions.

* Algorithms/Special techniques needed:
  * Text parsing algorithm for taking nutritional data

  * Text parsing for taking in the SMS messages and correcting for minor user errors.

* Mockups:

<img src="/mockups/home_page.png" alt="Home page"/>

<img src="/mockups/menu_page.png" alt="Main menu page"/>

<img src="/mockups/bisque_page.png" alt="Bisque pic"/>

#Comments by Ming
1. Wireframes are not supposed to have pretty pictures
2. I like the idea of incorporating pictures from Flickr into this
3. "Text parsing for taking in the SMS messages and correcting for minor user errors." --really?  Any idea how you will tackle this?
4. Your list of features are "wrong".  You listed the features in your "How do we solve the problem".
5. Overall: 13/15
