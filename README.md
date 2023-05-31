# Step_Project_3-Havrylenko_Lyasenko_Slobodyanuk

## Name
Step Project 3 - Cards

## Description
 Necessary to create a page where the Secretary can create cards describing scheduled doctor visits.

The page must contain:

Header (header) of the page:
1. in the upper left corner - the logo. You can take any
2. in the right corner - the "Login" button. After successful authorization, it should change to the "Create visit" button.
Under Header - a form for filtering visits. This form should have 3 fields:
- search by title of visit
- search by status (Open/Done) (visit passed or not yet)
- visit urgency (High, Normal, Low)
Under the filter form - a list of created visits.

## Badges
Learning program DAN.It academy

## Visuals
The design can be anything, but it should be.

## Support
During realisation project was used consultation with Volodymer Zhykovskiy

## Roadmap
1. Create interface of site (header, main content, footer)
2. Create Login window
3. Create filter bar
4. Create window for create visit
5. Making function send to server for new visit
6. Render visit on the screen
7. Create window for edit visit
8. Edit visits using JS
9. Filter visits using JS
10. Delete visits using JS

## Contributing
During making project were used preprocessors on Galp basis:
    "browser-sync": "^2.29.1",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-clean": "^0.4.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-htmlmin": "^5.0.1",
    "gulp-imagemin": "^7.1.0",
    "gulp-sass": "^5.1.0",
    "gulp-uglify": "^3.0.2",
    "sass": "^1.59.3",
    "gulp-file-include": "^2.3.0"

## Authors and acknowledgment
Were done by:
1. Artem Lyasenko:
    1.1. Create collector on Galp basis
    1.2. Loading and update page
    1.3. Loading token
    1.4. Filter of visits
    1.5. Delete visit from server and from page
    1.6. Validation login and password
    1.7. Replasmenf function render Cards to Classes
    1.8. Optimisation methos SendToServer for Classes

2. Volodymyr Slobodyanuk:
    2.1. Render all cards to page
    2.2. Create window for edit card
    2.3. Edit cards and send to server and render on page
    2.4. Put request to server during edit cards

3. Yaroslav Havrylenko:
    3.1. Create general interface (header, filter bar, main content with cards, footer)
    3.2. Create modal window for login user
    3.3. Get token from server and save to local storage.
    3.4. Design of interface
    3.5. Create window for create new visits
    3.6. Send information from create visit form to server
    3.7. Create Classes (Visit, VisitCardiologist, VisitDentist, VisitTherapist)
    3.8. Create method sendToServer

## License
No license yet

## Project status
Project done 30.05.2023
