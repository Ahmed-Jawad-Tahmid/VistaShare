INSERT INTO User (Name, Password, Interests, TotalKMTravelled) VALUES
('John Doe', 'password1234', 'Hiking, Photography, Traveling', 1200),
('Alice Smith', 'securePass2024', 'Cycling, Reading, Cooking', 850),
('Bob Johnson', 'mypassword5678', 'Fishing, Traveling, Music', 1500),
('Emma Williams', 'EmmA12345', 'Yoga, Painting, Art Galleries', 640),
('James Brown', 'secretPass4321', 'Running, Music Festivals, Nature', 2500),
('Sophia Davis', 'Sophie2024Pass', 'Baking, Traveling, Hiking', 980),
('Michael Miller', 'mikepass890', 'Tech, Travel Blogging, Photography', 1900),
('Olivia Wilson', 'OliviaSafe123', 'Gardening, Cooking, Traveling', 1100),
('Lucas Martinez', 'LucasPass987', 'Soccer, Traveling, Volunteering', 1340),
('Mia Taylor', 'MiaPassword2024', 'Reading, Traveling, Fashion', 765);


INSERT INTO Admin (Name, Password) VALUES
('Sarah Lee', 'adminPass1234'),
('David Green', 'secureAdmin2024');


INSERT INTO Country (Name) VALUES
('United States'),
('Canada');


INSERT INTO City (Name, Coordinates, CountryID) VALUES
('New York', '40.7128° N, 74.0060° W', 1),  -- United States
('Los Angeles', '34.0522° N, 118.2437° W', 1),  -- United States
('Vancouver', '49.2827° N, 123.1207° W', 2),  -- Canada
('Toronto', '43.65107° N, 79.347015° W', 2),  -- Canada
('Calgary', '51.0447° N, 114.0719° W', 2);  -- Canada


INSERT INTO Location (Name, Description, Coordinates, OverallRating, CityID)
VALUES 
('Central Park', 'A large park in the middle of Manhattan, known for its open spaces and scenic views.', '40.7851° N, 73.9683° W', 4.8, 6),
('Statue of Liberty', 'An iconic symbol of freedom, located on Liberty Island in New York Harbor.', '40.6892° N, 74.0445° W', 4.7, 6),
('Empire State Building', 'A famous skyscraper and one of the tallest buildings in the world.', '40.748817° N, 73.985428° W', 4.6, 6),
('Times Square', 'A busy commercial and entertainment hub in Midtown Manhattan.', '40.7580° N, 73.9855° W', 4.5, 6),
('Brooklyn Bridge', 'A suspension bridge connecting Brooklyn and Manhattan.', '40.7061° N, 73.9969° W', 4.6, 6),
('Hollywood Sign', 'An iconic landmark in the Hollywood Hills overlooking Los Angeles.', '34.1341° N, 118.3215° W', 4.9, 7),
('Griffith Observatory', 'An observatory located on Mount Hollywood offering amazing views of Los Angeles and the stars.', '34.1184° N, 118.3004° W', 4.8, 7),
('Santa Monica Pier', 'A popular spot with a large amusement park and beautiful beach views.', '34.0226° N, 118.4957° W', 4.7, 7),
('Venice Beach', 'Known for its boardwalk, volleyball courts, and vibrant arts scene.', '33.9850° N, 118.4695° W', 4.6, 7),
('The Getty Center', 'A museum offering impressive art collections and stunning architecture.', '34.0780° N, 118.4740° W', 4.8, 7),
('Stanley Park', 'A famous urban park in Vancouver with scenic trails and views of the water.', '49.3030° N, 123.1448° W', 4.9, 8),
('Capilano Suspension Bridge', 'A pedestrian suspension bridge crossing the Capilano River in North Vancouver.', '49.3235° N, 123.1149° W', 4.7, 8),
('Granville Island', 'A bustling area filled with markets, restaurants, and artistic galleries.', '49.2710° N, 123.1337° W', 4.8, 8),
('Vancouver Aquarium', 'A marine science center showcasing marine life and conservation efforts.', '49.3054° N, 123.1182° W', 4.6, 8),
('Vancouver Art Gallery', 'An art gallery housing collections of historical and contemporary art.', '49.2830° N, 123.1217° W', 4.7, 8),
('CN Tower', 'A landmark tower with a revolving restaurant and observation deck in Toronto.', '43.6426° N, 79.3871° W', 4.8, 9),
('Royal Ontario Museum', 'A museum showcasing art, culture, and nature with exhibits from around the world.', '43.6677° N, 79.3948° W', 4.7, 9),
('Toronto Islands', 'A group of small islands off the coast of downtown Toronto, known for parks and beaches.', '43.6270° N, 79.3953° W', 4.6, 9),
('Ripley\'s Aquarium of Canada', 'An aquarium located in downtown Toronto, showcasing marine life from across the globe.', '43.6420° N, 79.3832° W', 4.7, 9),
('Distillery District', 'A historic area in Toronto known for its Victorian-era buildings and trendy shops.', '43.6500° N, 79.3591° W', 4.8, 9),
('Banff National Park', 'A national park located in the Canadian Rockies, offering scenic views and outdoor adventures.', '51.4968° N, 115.9281° W', 5.0, 10),
('Lake Louise', 'A picturesque lake in Banff National Park known for its turquoise waters and surrounding mountains.', '51.4161° N, 116.1773° W', 4.9, 10),
('Sunshine Village', 'A ski resort located in Banff National Park with skiing, hiking, and stunning alpine views.', '51.2011° N, 115.7802° W', 4.8, 10),
('Icefields Parkway', 'A scenic drive connecting Jasper and Banff National Parks, with breathtaking views of glaciers.', '53.2185° N, 118.0847° W', 4.9, 10),
('Jasper National Park', 'A UNESCO World Heritage site in the Canadian Rockies, famous for its wildlife and hiking trails.', '52.8734° N, 118.0814° W', 4.8, 10),
('Bowness Park', 'A picturesque park in Calgary with scenic views of the Bow River and picnic areas.', '51.0956° N, 114.1633° W', 4.6, 10),
('Calgary Tower', 'A tower offering 360-degree views of Calgary and the surrounding mountains.', '51.0442° N, 114.0623° W', 4.7, 10),
('Fish Creek Provincial Park', 'A large urban park in Calgary, perfect for hiking and picnicking.', '50.9181° N, 114.0374° W', 4.7, 10),
('Heritage Park', 'A historical park showcasing Calgary\'s history, with restored buildings and artifacts.', '50.9499° N, 114.0823° W', 4.8, 10),
('Calgary Zoo', 'A zoo with a diverse range of animals, offering educational programs and exhibits.', '51.0446° N, 113.9902° W', 4.5, 10),
('Rodeo Park', 'A park in Calgary offering rodeo events, festivals, and live entertainment.', '51.0455° N, 114.0582° W', 4.6, 10),
('Lougheed House', 'A historic house museum in Calgary, showcasing the history of the Lougheed family.', '51.0458° N, 114.0643° W', 4.5, 10),
('Prince\'s Island Park', 'A park located on an island in downtown Calgary, popular for outdoor activities and events.', '51.0480° N, 114.0670° W', 4.7, 10),
('Calgary Stampede Grounds', 'The venue for the Calgary Stampede, a rodeo and exhibition event held annually.', '51.0412° N, 114.0690° W', 4.8, 10);


--CITYGUIDES

-- Create posts
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
VALUES
('Exploring Central Park', 'Central Park offers a vast area for outdoor activities, including walking, biking, and picnicking.', NULL, TRUE, 9.0, '2024-05-10', 1, 1),
('The Wonders of Times Square', 'Times Square is a must-visit spot in New York with bright lights, theaters, and street performers.', NULL, TRUE, 8.5, '2024-05-11', 2, 1);

-- Create city guides
INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
VALUES 
(1, 6, 3, 'Sightseeing, Shopping', 9, 'Central Park, Times Square, Statue of Liberty', 'Urban, Tourism'),
(2, 6, 2, 'History, Culture', 8, 'Empire State Building, Brooklyn Bridge, Museum of Modern Art', 'History, Art');


-- Create posts
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
VALUES
('Hollywood and Its Legends', 'Visit the iconic Hollywood Sign and explore the history of movies in LA.', NULL, TRUE, 9.5, '2024-05-15', 3, 2),
('Griffith Observatory Experience', 'Griffith Observatory offers breathtaking views of Los Angeles and a glimpse into the universe.', NULL, TRUE, 8.7, '2024-05-16', 4, 2);

-- Create city guides
INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
VALUES 
(3, 7, 4, 'Entertainment, Sightseeing', 9, 'Hollywood Sign, Griffith Observatory, Santa Monica Pier', 'Hollywood, Iconic'),
(4, 7, 3, 'Nature, Hiking', 8, 'Venice Beach, Runyon Canyon, Malibu', 'Nature, Fitness');


-- Create posts
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
VALUES
('Stanley Park: A Nature Retreat', 'Stanley Park is a beautiful place to relax, walk or ride a bike, offering a break from the city.', NULL, TRUE, 9.2, '2024-05-20', 5, 2),
('Granville Island: A Hub of Art and Food', 'Granville Island is a delightful market with fresh food, art galleries, and a local brewery.', NULL, TRUE, 8.8, '2024-05-21', 6, 2);

-- Create city guides
INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
VALUES 
(5, 8, 2, 'Nature, Art', 9, 'Stanley Park, Granville Island, Vancouver Aquarium', 'Outdoor, Culture'),
(6, 8, 3, 'Shopping, Dining', 8, 'Robson Street, Granville Island, Vancouver Art Gallery', 'Shopping, Food');


-- Create posts
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
VALUES
('Exploring the CN Tower', 'The CN Tower offers panoramic views of Toronto and is an iconic part of the skyline.', NULL, TRUE, 9.0, '2024-06-01', 7, 2),
('The Distillery District', 'A historic area with cobblestone streets, art galleries, and a vibrant nightlife scene.', NULL, TRUE, 8.7, '2024-06-02', 8, 2);

-- Create city guides
INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
VALUES 
(7, 9, 4, 'Sightseeing, Culture', 9, 'CN Tower, Royal Ontario Museum, Distillery District', 'Urban, Heritage'),
(8, 9, 2, 'Art, Culture', 8, 'High Park, Yorkville, Art Gallery of Ontario', 'Art, History');


-- Create posts
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID)
VALUES
('The Beauty of Banff National Park', 'Banff National Park is a stunning location with crystal-clear lakes and beautiful mountain views.', NULL, TRUE, 9.6, '2024-06-10', 9, 2),
('Heritage Park Historical Village', 'Explore Calgary’s history with Heritage Park’s interactive exhibits, including an old-time train ride.', NULL, TRUE, 8.5, '2024-06-12', 10, 2);

-- Create city guides
INSERT INTO CityGuide (PostID, CityID, VisitDuration, ActivityTypes, RatingOutOf10, KeyPoints, Tags)
VALUES 
(9, 10, 3, 'Nature, Adventure', 9, 'Banff National Park, Calgary Tower, Heritage Park', 'Nature, Adventure'),
(10, 10, 2, 'Culture, Family', 8, 'Heritage Park, Calgary Zoo, Olympic Plaza', 'Family, History');


-- New York
INSERT INTO TopSpotsList (CityID, AdminID, Date)
VALUES
(6, 1, '2024-12-07');  -- New York, created by Admin 1 on Dec 7, 2024

-- Los Angeles
INSERT INTO TopSpotsList (CityID, AdminID, Date)
VALUES
(7, 2, '2024-12-08');  -- Los Angeles, created by Admin 2 on Dec 8, 2024

-- Vancouver
INSERT INTO TopSpotsList (CityID, AdminID, Date)
VALUES
(8, 1, '2024-12-09');  -- Vancouver, created by Admin 1 on Dec 9, 2024

-- Toronto
INSERT INTO TopSpotsList (CityID, AdminID, Date)
VALUES
(9, 2, '2024-12-10');  -- Toronto, created by Admin 2 on Dec 10, 2024

-- Calgary
INSERT INTO TopSpotsList (CityID, AdminID, Date)
VALUES
(10, 1, '2024-12-11');  -- Calgary, created by Admin 1 on Dec 11, 2024




-- LocationReview tuples
INSERT INTO LocationReview (PostID, LocationID) VALUES
(12, 26),  -- Central Park Review
(13, 32),  -- Griffith Observatory Review
(14, 36),  -- Stanley Park Review
(15, 41),  -- CN Tower Review
(16, 52),  -- Calgary Tower Review
(17, 38),  -- Granville Island Review
(18, 34),  -- Venice Beach Review
(19, 29),  -- Times Square Review
(20, 42),  -- Royal Ontario Museum Review
(21, 46),  -- Banff National Park Review
(22, 37),  -- Capilano Suspension Bridge Review
(23, 33),  -- Santa Monica Pier Review
(24, 51),  -- High Park Review
(25, 47),  -- Lake Louise Review
(26, 30);  -- Brooklyn Bridge Review


+--------+-----------------------------------+-------------------------------------------------------------------------------------------------------------------+--------------------------+---------------+--------+------------+----------+---------+
| PostID | Title                             | Text
                                         | Media                    | IsUnderReview | Rating | Date       | MemberID | AdminID |
+--------+-----------------------------------+-------------------------------------------------------------------------------------------------------------------+--------------------------+---------------+--------+------------+----------+---------+
|     12 | Central Park Review               | Central Park is an iconic spot in New York, offering both nature and city vibes.                                  | central_park.jpg         |             0 |   9.00 | 2024-12-07 |        1 |       1 |
|     13 | Griffith Observatory Review       | A must-visit in Los Angeles for stunning views of the city and the stars.                                         | griffith_observatory.jpg |             0 |   8.50 | 2024-12-08 |        2 |       2 |
|     14 | Stanley Park Review               | Stanley Park is a green oasis in Vancouver, great for cycling and walking.                                        | stanley_park.jpg         |             0 |   8.80 | 2024-12-09 |        3 |       1 |
|     15 | CN Tower Review                   | The CN Tower offers breathtaking views of Toronto, a great experience for visitors.                               | cn_tower.jpg             |             0 |   9.30 | 2024-12-10 |        4 |       2 |
|     16 | Calgary Tower Review              | The Calgary Tower offers a fantastic view of the city, especially at sunset.                                      | calgary_tower.jpg        |             0 |   8.70 | 2024-12-11 |        5 |       1 |
|     17 | Granville Island Review           | Granville Island is a vibrant spot with markets, restaurants, and art galleries.                                  | granville_island.jpg     |             0 |   9.00 | 2024-12-09 |        6 |       2 |
|     18 | Venice Beach Review               | Venice Beach is perfect for a walk along the shore, watching street performers and enjoying the beach atmosphere. | venice_beach.jpg         |             0 |   8.60 | 2024-12-08 |        7 |       1 |
|     19 | Times Square Review               | Times Square is the heart of New York, buzzing with lights, tourists, and energy.                                 | times_square.jpg         |             0 |   9.20 | 2024-12-07 |        8 |       2 |
|     20 | Royal Ontario Museum Review       | The ROM is a must-visit in Toronto, with exhibits ranging from art to science.                                    | rom_toronto.jpg          |             0 |   9.10 | 2024-12-10 |        9 |       1 |
|     21 | Banff National Park Review        | Banff National Park is a beautiful and serene getaway in the Canadian Rockies.                                    | banff_national_park.jpg  |             0 |   9.50 | 2024-12-11 |       10 |       2 |
|     22 | Capilano Suspension Bridge Review | Walking across the Capilano Suspension Bridge is an unforgettable experience.                                     | capilano_bridge.jpg      |             0 |   8.90 | 2024-12-09 |        1 |       2 |
|     23 | Santa Monica Pier Review          | Santa Monica Pier is a classic California attraction, great for a fun day with family.                            | santa_monica_pier.jpg    |             0 |   8.40 | 2024-12-08 |        2 |       1 |
|     24 | High Park Review                  | High Park is Toronto’s largest public park, offering beautiful nature and recreation options.                     | high_park.jpg            |             0 |   8.80 | 2024-12-10 |        3 |       2 |
|     25 | Lake Louise Review                | Lake Louise is an incredibly scenic lake, surrounded by mountains in Banff National Park.                         | lake_louise.jpg          |             0 |   9.40 | 2024-12-11 |        4 |       1 |
|     26 | Brooklyn Bridge Review            | The Brooklyn Bridge is a historic landmark offering beautiful views of the New York skyline.                      | brooklyn_bridge.jpg      |             0 |   9.00 | 2024-12-07 |        5 |       2 |
+--------+-----------------------------------+-------------------------------------------------------------------------------------------------------------------+--------------------------+---------------+--------+------------+----------+---------+


INSERT INTO GroupTable (GroupName, Description, Tags)
VALUES
  ('Adventure Seekers', 'A group for those passionate about outdoor adventures, hiking, and exploration.', 'Hiking, Adventure, Nature'),
  ('City Explorers', 'For people who enjoy discovering the hidden gems in cities around the world.', 'Urban, Exploration, Sightseeing'),
  ('Art Enthusiasts', 'A community for lovers of art, museums, galleries, and all things creative.', 'Art, Museums, Culture'),
  ('Foodies United', 'A group dedicated to food lovers, sharing the best restaurants and street food experiences.', 'Food, Culinary, Travel');


INSERT INTO GroupMembers (GroupName, MemberID, IsModerator) VALUES
('Adventure Seekers', 1, 1),
('Adventure Seekers', 2, 0),
('Adventure Seekers', 3, 0),
('Adventure Seekers', 4, 0),
('Art Enthusiasts', 2, 1),
('Art Enthusiasts', 5, 0),
('Art Enthusiasts', 6, 0),
('Art Enthusiasts', 7, 0),
('City Explorers', 3, 1),
('City Explorers', 8, 0),
('City Explorers', 9, 0),
('City Explorers', 10, 0),
('Foodies United', 4, 1),
('Foodies United', 1, 0),
('Foodies United', 5, 0),
('Foodies United', 8, 0),
('Adventure Seekers', 6, 0),
('Art Enthusiasts', 9, 0),
('City Explorers', 2, 0),
('Foodies United', 3, 0),
('Art Enthusiasts', 10, 0);

-- Post tuples for discussion posts based on the new table schema
INSERT INTO Post (Title, Text, Media, IsUnderReview, Rating, Date, MemberID, AdminID) VALUES
('Hiking in the Rockies', 'Discussing the best trails and hiking spots in the Rockies for our next trip.', NULL, FALSE, 8.00, '2024-12-01', 1, NULL),
('Best Adventure Gear', 'Let’s share tips and recommendations on the best gear for hiking and outdoor adventures.', NULL, FALSE, 7.00, '2024-12-02', 2, NULL),
('Exploring Local Art', 'What are the best local galleries to explore this month?', NULL, FALSE, 9.00, '2024-12-03', 3, NULL),
('Upcoming Art Exhibit', 'Looking for recommendations for exhibits happening in the next few weeks.', NULL, FALSE, 8.00, '2024-12-04', 4, NULL),
('Urban Exploration: Hidden Gems', 'Let’s talk about secret spots to explore in the city.', NULL, FALSE, 7.00, '2024-12-05', 5, NULL),
('Best Street Food in the City', 'Sharing thoughts on where to find the best street food in town.', NULL, FALSE, 9.00, '2024-12-06', 6, NULL),
('Great Parks for Family Picnic', 'Where are the best parks in the city for a family day out?', NULL, FALSE, 9.00, '2024-12-07', 7, NULL),
('Farm-to-Table Dining Experiences', 'Looking for great farm-to-table restaurants in the area.', NULL, FALSE, 8.00, '2024-12-08', 8, NULL),
('Mountain Adventures', 'Let’s organize a weekend trip to the mountains!', NULL, FALSE, 8.00, '2024-12-09', 9, NULL),
('New Food Trucks in Town', 'Check out these new food trucks opening around the city!', NULL, TRUE, 7.00, '2024-12-10', 10, NULL);



INSERT INTO TravelLog (MemberID, CityID, DurationOfStay, Date) 
VALUES
(1, 6, 5, '2024-05-01'),
(1, 7, 3, '2024-06-10'),
(2, 6, 4, '2024-05-15'),
(2, 8, 6, '2024-07-01'),
(3, 7, 7, '2024-05-20'),
(3, 9, 2, '2024-06-05'),
(4, 8, 3, '2024-06-12'),
(4, 10, 5, '2024-07-15'),
(5, 6, 6, '2024-06-01'),
(5, 9, 4, '2024-08-10'),
(5, 10, 3, '2024-09-05'),
(6, 7, 5, '2024-05-18'),
(6, 8, 7, '2024-07-01'),
(7, 6, 3, '2024-06-07'),
(7, 10, 4, '2024-07-25'),
(8, 7, 2, '2024-05-25'),
(8, 9, 5, '2024-06-20'),
(8, 10, 3, '2024-08-12'),
(9, 6, 4, '2024-06-05'),
(9, 8, 6, '2024-07-10'),
(10, 9, 7, '2024-05-30'),
(10, 10, 2, '2024-06-15');


INSERT INTO Comment (PostID, MemberID, Text, Date, Rating) VALUES
(1, 1, 'Great park for a morning walk!', '2024-12-07', 4.5),
(1, 2, 'I love the greenery here!', '2024-12-07', 5.0),
(2, 3, 'Times Square is amazing at night.', '2024-12-07', 4.0),
(2, 4, 'Crowded but full of life!', '2024-12-07', 3.5),
(3, 5, 'Hollywood is always magical!', '2024-12-07', 4.7),
(3, 6, 'Great for movie lovers!', '2024-12-07', 5.0),
(4, 7, 'Fantastic view from the observatory!', '2024-12-07', 4.8),
(4, 8, 'A bit crowded, but worth it!', '2024-12-07', 4.0),
(5, 9, 'Stanley Park is my favorite nature spot.', '2024-12-07', 4.5),
(5, 10, 'Perfect for a peaceful day outdoors.', '2024-12-07', 5.0),
(6, 1, 'Granville Island has such a vibrant atmosphere!', '2024-12-07', 4.5),
(6, 2, 'I love the food and arts here.', '2024-12-07', 5.0),
(7, 3, 'The CN Tower gives a stunning view of the city!', '2024-12-07', 4.7),
(7, 4, 'Such a great experience.', '2024-12-07', 4.2),
(8, 5, 'The Distillery District is full of charm!', '2024-12-07', 4.8),
(8, 6, 'Such an interesting place to visit.', '2024-12-07', 4.3),
(9, 7, 'Banff National Park is breathtaking.', '2024-12-07', 5.0),
(9, 8, 'Absolutely stunning views!', '2024-12-07', 5.0),
(10, 9, 'Heritage Park is great for history buffs.', '2024-12-07', 4.5),
(10, 10, 'Loved walking through this historical village!', '2024-12-07', 4.6),
(12, 1, 'I love Central Park for a relaxing day.', '2024-12-07', 4.7),
(12, 2, 'It’s perfect for a jog or picnic.', '2024-12-07', 5.0),
(13, 3, 'The Griffith Observatory is a must-visit!', '2024-12-07', 4.9),
(13, 4, 'Great spot for stargazing!', '2024-12-07', 4.5),
(14, 5, 'Stanley Park’s views are amazing.', '2024-12-07', 4.7),
(14, 6, 'This is such a peaceful place.', '2024-12-07', 4.4),
(15, 7, 'The CN Tower is iconic.', '2024-12-07', 4.8),
(15, 8, 'The elevator ride was exhilarating.', '2024-12-07', 4.5),
(16, 9, 'Calgary Tower offers a great city view.', '2024-12-07', 4.6),
(16, 10, 'Worth the visit for the skyline.', '2024-12-07', 4.7),
(17, 1, 'Granville Island is perfect for a day out.', '2024-12-07', 4.9),
(17, 2, 'So much to explore here!', '2024-12-07', 4.8),
(18, 3, 'Venice Beach has a laid-back vibe.', '2024-12-07', 4.5),
(18, 4, 'A great beach for relaxation.', '2024-12-07', 4.3),
(19, 5, 'Times Square is truly unique.', '2024-12-07', 5.0),
(19, 6, 'The lights and energy are incredible.', '2024-12-07', 4.9),
(20, 7, 'The Royal Ontario Museum is amazing.', '2024-12-07', 4.8),
(20, 8, 'The exhibits were so informative!', '2024-12-07', 4.6),
(21, 9, 'Banff is a hiker’s paradise.', '2024-12-07', 4.9),
(21, 10, 'Definitely coming back here!', '2024-12-07', 5.0),
(22, 1, 'Capilano Suspension Bridge is thrilling.', '2024-12-07', 4.7),
(22, 2, 'It’s a unique experience.', '2024-12-07', 4.6),
(23, 3, 'Santa Monica Pier is fun for everyone.', '2024-12-07', 4.4),
(23, 4, 'Such a lively atmosphere!', '2024-12-07', 4.5),
(24, 5, 'High Park is great for picnics.', '2024-12-07', 4.7),
(24, 6, 'Perfect for families.', '2024-12-07', 4.6),
(25, 7, 'Lake Louise is a serene place.', '2024-12-07', 5.0),
(25, 8, 'Such peaceful surroundings.', '2024-12-07', 4.8),
(26, 9, 'The Brooklyn Bridge is a New York classic.', '2024-12-07', 5.0),
(26, 10, 'Fantastic views of the city skyline.', '2024-12-07', 4.9),
(37, 1, 'Hiking in the Rockies was breathtaking.', '2024-12-07', 5.0),
(37, 2, 'I loved every minute of the hike.', '2024-12-07', 4.9),
(38, 3, 'The best adventure gear for any trip!', '2024-12-07', 4.8),
(38, 4, 'Highly recommend these brands.', '2024-12-07', 4.7),
(39, 5, 'Exploring local art is always inspiring.', '2024-12-07', 4.9),
(39, 6, 'Amazing art exhibits to check out!', '2024-12-07', 5.0),
(40, 7, 'Upcoming art exhibits should not be missed.', '2024-12-07', 4.6),
(40, 8, 'Can’t wait for the next one!', '2024-12-07', 4.8),
(41, 9, 'Urban exploration is a fantastic hobby.', '2024-12-07', 4.7),
(41, 10, 'Found some great hidden gems!', '2024-12-07', 4.8),
(42, 1, 'Street food in the city is delicious!', '2024-12-07', 4.9),
(42, 2, 'I’m obsessed with these food trucks.', '2024-12-07', 4.6),
(43, 3, 'Great parks for a family picnic.', '2024-12-07', 4.8),
(43, 4, 'Such a perfect place for kids.', '2024-12-07', 4.7),
(44, 5, 'Farm-to-table dining experiences are the best!', '2024-12-07', 4.9),
(44, 6, 'Amazing food with local ingredients.', '2024-12-07', 5.0),
(45, 7, 'Mountain adventures are so refreshing.', '2024-12-07', 4.7),
(45, 8, 'The mountain views are mesmerizing.', '2024-12-07', 4.9),
(46, 9, 'New food trucks in town are worth checking out.', '2024-12-07', 4.6),
(46, 10, 'Can’t wait to try the new ones!', '2024-12-07', 4.7);

