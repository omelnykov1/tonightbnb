# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
ActiveRecord::Base.transaction do 
  User.destroy_all
  Spot.destroy_all
  Review.destroy_all

admin = User.create(email: "tonightbnb@admin.com", name: "admin", password: "welcometomyapp")
jason = User.create(email: "jason@gmail.com", name: "Jason Stewart", password: "thisispassword")
fabian = User.create(email: "fabian@aol.com", name: "Fabian Smith", password: "fabian123")
howard = User.create(email: "howardtim@yahoo.com", name: "Tim Howard", password: "hotgod")
julia = User.create(email: "julia@gmail.com", name: "Julia Holland", password: "dogsrules")
monica = User.create(email: "monica@yahoo.com", name: "Monica Varane", password: "mypasswordishard")
viktoria = User.create(email: "viktoria@gmail.com", name: "Viktoria Palmes", password: "holywood1")
sergio = User.create(email: "ramos@gmail.com", name: "Sergio Ramos", password: "vamosreal")
harry = User.create(email: "jones@gmail.com", name: "Harry Jones", password: "vlondon")

new_york_midtown = Spot.create(price: 200, 
                        description: "We want everyone to have a comfortable place to stay. Our digital check-in and the ability to manage your stay from our app, means you won't need to interact with anyone in person.", 
                        city: 'New York',
                        country: 'USA', 
                        title: "Entire apartment in the center of Midtown", 
                        lat: 40.764361, 
                        lng: -73.987779, 
                        spot_type: 'Entire apartment', 
                        host_id: jason.id, 
                        address: '368 W 52nd St, New York, NY 10019')

new_york_downtown =  Spot.create(price: 180, 
                        description: "We want everyone to have a comfortable place to stay. Our digital check-in and the ability to manage your stay from our app, means you won't need to interact with anyone in person.", 
                        city: 'New York',
                        country: 'USA', 
                        title: "Modern studio in Tribeca", 
                        lat: 40.7122637, 
                        lng: -74.0113292, 
                        spot_type: 'Entire apartment', 
                        host_id: fabian.id, 
                        address: '10 Barclay St New York, NY 10007')

williamsurg =  Spot.create(price: 93, 
                        description: "This is a large 1 bedroom apartment on the 2nd floor of a new building in Williamsburg. The building is on a quiet street within walking distance to everything you might want - restaurants, concert venues, bars, great shopping and art galleries. The L train runs 24/7 and can take you into Manhattan in a heartbeat! The apartment is bright and warm, I love living here, I'm sure you will too!

Please note since the photos were taken I have removed the wall as well as the bed in the living room. There is now a full dining room table where the bed used to be, if requested I can send photos of the new space.", 
                        city: 'Brooklyn',
                        country: 'USA', 
                        title: "Amazing Artsy & Trendy Building w/Private Bathroom", 
                        lat: 40.7154951, 
                        lng: -73.9577791, 
                        spot_type: 'Private room', 
                        host_id: julia.id, 
                        address: '246 N 6th St Brooklyn, NY 11211')

bushwick =  Spot.create(price: 67, 
                        description: "This room has 2 windows and lots of light! It has a smart-TV as well as a workstation. There is a closet with ample room stocked with towels and amenities. There are many restaurants and eateries in the area, and there is a coffee shop at the end of the block. The apartment is close to the L, M, and J trains, each of which go into Manhattan just a short ride away.", 
                        city: 'Brooklyn',
                        country: 'USA', 
                        title: "Spacious room with a double bed in heart of BK", 
                        lat: 40.7154951, 
                        lng: -73.9577791, 
                        spot_type: 'Private room', 
                        host_id: viktoria.id, 
                        address: '211 Knickerbocker Ave, Brooklyn, NY 11237')

brooklyn =  Spot.create(price: 75, 
                        description: "The apartment is on the garden level/ground floor of our townhouse which has exposed brick walls and many other unique details.
                                        The apartment is independent with a private entrance. We live in the home just above the apartment.
                                        The bedroom has a queen size bed and the kitchen/living room space has 2 single convertible beds that are best suited for children or young teenagers.", 
                        city: 'Brooklyn',
                        country: 'USA', 
                        title: "Super cozy ground fl. 1 BR apt. in private home", 
                        lat: 40.690874, 
                        lng: -73.9398019, 
                        spot_type: 'Entire apartment', 
                        host_id: sergio.id, 
                        address: '837 Lafayette Av Brooklyn, NY 11221')

lower_east_side =  Spot.create(price: 115, 
                        description: "Welcome to your Private and Artsy 1 Bedroom Apartment in PRIME Lower East Side. Steps to Katz's Delicatessen, Little Italy, SoHo, & the F Train! The apartment has Huge, Clean Bedrooms; a Rock n' Roll Living Room, 4k TV, Big Kitchen, Fast WIFI :)",
                        city: 'New York',
                        country: 'USA', 
                        title: "Queen Bed Suite near E Village - So Cozy! So Chic!", 
                        lat: 40.719368, 
                        lng: -73.9890733, 
                        spot_type: 'Entire apartment', 
                        host_id: howard.id, 
                        address: '114 Norfolk St New York, NY 10002')

venice_beach = Spot.create(price: 55, 
                        description: "BEST LOCATION IN LOS ANGELES. No joke, you are going to love our neighborhood.
                                    Our comfortable Venice Beach bungalow is situated only blocks from the best leisure areas and beaches in Los Angeles. Three blocks from the hip Rose Ave and minutes from Abbot Kinney (voted GQ's Coolest Street in the US) you can eat/drink/shop your heart out.
                                    Stroll to beach (5 min by bike), Whole Foods and Main St.. Less than 2mi bike ride to Santa Monica Pier/Promenade.",
                        city: 'Venice',
                        country: 'USA', 
                        title: "Beach Bungalow In Trendy Venice Beach Location", 
                        lat: 33.9894812, 
                        lng: 118.4726405, 
                        spot_type: 'Private Room', 
                        host_id: harry.id, 
                        address: '299 Market St Venice, CA 90291')

venice_beach_apt = Spot.create(price: 120, 
                        description: "The Common Studio is beautifully designed to celebrate Southern California's easy-breezy lifestyle. Big French doors open the entire space to charming front yard. Feel the air and freshness when you chill outdoors, and indulge in comfort and peace when you stay in.
                                    Ideally located on a quiet upscale street in the center of Venice Beach community, our studio is just a few steps to Whole Foods Market and golf course, and a short bike ride to Abbot Kinney, Santa Monica Main Street, and Venice beach.",
                        city: 'Venice',
                        country: 'USA', 
                        title: "The Common Studio, Venice Beach, CA", 
                        lat: 33.9912205, 
                        lng: -118.4763403, 
                        spot_type: 'Entire Apartment', 
                        host_id: monica.id, 
                        address: '199-101 Breeze Ct Venice, CA 90291')

venice_beach_room = Spot.create(price: 45, 
                        description: "Beautiful private room with four poster bed in 92 year old rustic brick house with wood beamed ceiling in quiet safe Culver City neighborhood. I have two rooms that I rent out for Airbnb with a shared bathroom. Short walking distance to restaurants and movie theatres in downtown Culver City. This is a pet friendly house.",
                        city: 'Los Angeles',
                        country: 'USA', 
                        title: "Room in Lovely Rustic Brick House", 
                        lat: 33.9912205, 
                        lng: -118.4763403, 
                        spot_type: 'Shared room', 
                        host_id: admin.id, 
                        address: '4298-4200 Kenyon Ave Los Angeles, CA 90066')

#1
new_york_midtown_review = Review.create(
              body: "Great area and lovely apartment. It’s looks just like in the photos and was nice and clean. There’s a water cooker and some tea which was a really nice touch. Would definitely stay here again :)",
              rating: 4.5,
              spot_id: new_york_midtown.id,
              guest_id: julia.id)

new_york_midtown_review2 = Review.create(
              body: "Loved it! A beautiful apartment with a good view and great amenities. It’s In an amazing area and they responded immediately whenever I had a question! Would definitely really and would stay here again!!",
              rating: 5.0,
              spot_id: new_york_midtown.id,
              guest_id: harry.id)

new_york_midtown_review3 = Review.create(
              body: "Great place to stay it’s in the middle of everything. Loved it private balcony and washer and dryer are the best thing ever",
              rating: 4.8,
              spot_id: new_york_midtown.id,
              guest_id: monica.id)

#2

new_york_downtown_review = Review.create(
              body: "The perfect location we loved the studio, all the amenities we needed, walking distance to great food, coffee and the subway, we only wished we could have stayed longer. Warm and cozy, easy check in/check out.",
              rating: 4.7,
              spot_id: new_york_downtown.id,
              guest_id: sergio.id)

new_york_downtown_review2 = Review.create(
              body: "An excellent, studio apartment in one of New York’s most delightful neighbourhoods, a swift walk away from the High Line, good shops, grocery stores and wine shops. The place its self was clean, the host provided bathroom amenities and cooking pantry items, which makes it easier as someone who travels very lightly. The kitchen area was very functional, as was the layout of the space. Would recommend, and would stay again",
              rating: 4.2,
              spot_id: new_york_downtown.id,
              guest_id: fabian.id)

new_york_downtown_review3 = Review.create(
              body: "What a great place!! This apartment was charming! Very cute, very clean, very comfortable. A fantastic location right in Chelsea. Everything in the apartment appeared new.I felt completely at home. I would book it again in a New York second!! ",
              rating: 4.4,
              spot_id: new_york_downtown.id,
              guest_id: jason.id)


#3

williamsurg_review = Review.create(
              body: "Big loft with spacious guest bedroom and lots of closet space. Great location in Williamsburg, close to many good bars, restaurants and other venues. Responsive and welcoming host. Clean. Highly recommended.",
              rating: 4.7,
              spot_id: williamsurg.id,
              guest_id: viktoria.id)

williamsurg_review2 = Review.create(
              body: "Stylish apartment right across the East River from Manhattan. Great Brooklyn location. ",
              rating: 4.9,
              spot_id: williamsurg.id,
              guest_id: julia.id)

williamsurg_review3 = Review.create(
              body: "My second time here! The location is amazing! Williamsburg is so great and bustling with everything like restaurants, pizza joint, coffee shops, and killer bakery’s! ",
              rating: 4.6,
              spot_id: williamsurg.id,
              guest_id: howard.id)

#4
bushwick_review = Review.create(
              body: "Great place! Excellent location, really cute apt. Excellent host, quick responses to any questions. Had a great stay and would definitely stay again when back in town!",
              rating: 5.0,
              spot_id: bushwick.id,
              guest_id: sergio.id)

bushwick_review2 = Review.create(
              body: "The room we stayed in was so comfortable (I’ve never slept on a more comfortable bed) and the AC worked wonders as it was a very hot weekend. There were many small amenities included in the room as well - shampoo, hairdryer, lotions, teas, etc. Would absolutely stay here again, we had such a nice and relaxing time! ",
              rating: 4.6,
              spot_id: bushwick.id,
              guest_id: harry.id)

#5 
brooklyn_review = Review.create(
              body: "The entire apartment was really clean, and having a private bathroom made the entire stay more comfortable. The building is secure and safe, and you can easily get to the M train to get to Manhattan.",
              rating: 4.5,
              spot_id: brooklyn.id,
              guest_id: jason.id)

brooklyn_review2 = Review.create(
              body: "Very clean and neat place. Hosts were definitely thoughtful and friendly ",
              rating: 4.9,
              spot_id: brooklyn.id,
              guest_id: viktoria.id)

brooklyn_review3 = Review.create(
              body: "The host was great and the Airbnb was nice and just like the pics that were posted. It was also in good location and was able to get around pretty easy. Definitely enjoyed my stay!",
              rating: 4.6,
              spot_id: brooklyn.id,
              guest_id: fabian.id)

#6 
lower_east_side_review = Review.create(
              body: "Very cute place, well located in an area with many cute restaurants and shops. The hosts are very responsive and the check in check out process is very smooth. The place is very clean and has everything you can expect of a NYC apartment. I would stay again.",
              rating: 4.6,
              spot_id: lower_east_side.id,
              guest_id: sergio.id)

lower_east_side_review2 = Review.create(
              body: "Place was nice, great location. For two traveling guys who don't complain about much it was a great stay!",
              rating: 4.7,
              spot_id: lower_east_side.id,
              guest_id: harry.id)

lower_east_side_review3 = Review.create(
              body: "Great place. True to the photos. In an amazing location. ",
              rating: 4.9,
              spot_id: lower_east_side.id,
              guest_id: monica.id)

#7 
venice_beach_review = Review.create(
              body: "The place was in the great location. We can easily get to the beach or Downtown. Host was welcoming. He recommended us a couple of museums.",
              rating: 4.9,
              spot_id: venice_beach.id,
              guest_id: jason.id)

venice_beach_review2 = Review.create(
              body: "Great value, nice host with 2 cute dogs, comfortable bed, easy check-in, good coffee, very cozy home.",
              rating: 4.8,
              spot_id: venice_beach.id,
              guest_id: viktoria.id)

venice_beach_review3 = Review.create(
              body: "Cool, convenient place to stay. Quick response from the owner. Thanks!",
              rating: 4.5,
              spot_id: venice_beach.id,
              guest_id: howard.id)

#8 

venice_beach_apt_review = Review.create(
              body: "This space is great, extremely clean and has a nice outdoor space. Check-in is very easy and the apartment is close to many great spots. Home away from home on Venice.",
              rating: 4.8,
              spot_id: venice_beach_apt.id,
              guest_id: julia.id)

venice_beach_apt_review = Review.create(
              body: "Very cute cozy place to stay, perfect for a couple, good location not too far from the beach, restaurants, stores and LAX",
              rating: 4.6,
              spot_id: venice_beach_apt.id,
              guest_id: harry.id)

venice_beach_apt_review = Review.create(
              body: "The place is super nice! Stylish, clean and exactly how is described. The location is awesome, near to the beach and good bars and restaurants. There is a Whole Foods on the corner too. We definitely will be back.",
              rating: 5.0,
              spot_id: venice_beach_apt.id,
              guest_id: sergio.id)

#9 

venice_beach_room_review = Review.create(
              body: "Loved the location and the set up ! Will be back ASAP",
              rating: 4.4,
              spot_id: venice_beach_room.id,
              guest_id: sergio.id)

venice_beach_room_review = Review.create(
              body: "Wonderful stay! Great location, comfy bed, stylish space. Would definitely stay here again!",
              rating: 4.4,
              spot_id: venice_beach_room.id,
              guest_id: sergio.id)
              
venice_beach_room_review = Review.create(
              body: "I couldn’t have loved the place more and could absolutely live in the common house. The space was perfectly set up, the kitchen is beautiful and functional, and every small touch was nailed. Easily the best Airbnb I’ve ever stayed in.",
              rating: 4.4,
              spot_id: venice_beach_room.id,
              guest_id: sergio.id)

new_york_midtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/midtown1.jpg"), filename: "midtown1.jpg")
new_york_midtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/midtown2.jpg"), filename: "midtown2.jpg")
new_york_midtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/midtown3.jpg"), filename: "midtown3.jpg")
new_york_midtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/midtown4.jpg"), filename: "midtown4.jpg")
new_york_midtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/midtown12.jpg"), filename: "midtown12.jpg")


new_york_downtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/downtown1.jpg"), filename: "downtown1.jpg")
new_york_downtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/downtown2.jpg"), filename: "downtown2.jpg")
new_york_downtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/downtown3.jpg"), filename: "downtown3.jpg")
new_york_downtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/downtown4.jpg"), filename: "downtown4.jpg")
new_york_downtown.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/downtown5.jpg"), filename: "downtown5.jpg")


williamsurg.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/williamsburg1.jpg"), filename: "williamsburg1.jpg")
williamsurg.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/williamsburg2.jpg"), filename: "williamsburg2.jpg")
williamsurg.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/williamsburg3.jpg"), filename: "williamsburg3.jpg")
williamsurg.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/williamsburg4.jpg"), filename: "williamsburg4.jpg")
williamsurg.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/williamsburg5.jpg"), filename: "williamsburg5.jpg")


bushwick.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/bushwick1.jpg"), filename: "bushwick1.jpg")
bushwick.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/bushwick2.jpg"), filename: "bushwick2.jpg")
bushwick.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/bushwick3.jpg"), filename: "bushwick3.jpg")
bushwick.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/bushwick4.jpg"), filename: "bushwick4.jpg")
bushwick.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/bushwick5.jpg"), filename: "bushwick5.jpg")


brooklyn.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/brooklyn1.jpg"), filename: "brooklyn1.jpg")
brooklyn.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/brooklyn2.jpg"), filename: "brooklyn2.jpg")
brooklyn.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/brooklyn3.jpg"), filename: "brooklyn3.jpg")
brooklyn.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/brooklyn4.jpg"), filename: "brooklyn4.jpg")
brooklyn.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/brooklyn5.jpg"), filename: "brooklyn5.jpg")


lower_east_side.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/les1.jpg"), filename: "les1.jpg")
lower_east_side.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/les2.jpg"), filename: "les2.jpg")
lower_east_side.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/les3.jpg"), filename: "les3.jpg")
lower_east_side.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/les4.jpg"), filename: "les4.jpg")
lower_east_side.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/les5.jpg"), filename: "les5.jpg")


venice_beach.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/venice1.jpg"), filename: "venice1.jpg")
venice_beach.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/venice2.jpg"), filename: "venice2.jpg")
venice_beach.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/venice3.jpg"), filename: "venice3.jpg")
venice_beach.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/venice4.jpg"), filename: "venice4.jpg")
venice_beach.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/venice5.jpg"), filename: "venice5.jpg")


venice_beach_apt.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceapt1.jpg"), filename: "veniceapt1.jpg")
venice_beach_apt.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceapt2.jpg"), filename: "veniceapt2.jpg")
venice_beach_apt.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceapt3.jpg"), filename: "veniceapt3.jpg")
venice_beach_apt.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceapt4.jpg"), filename: "veniceapt4.jpg")
venice_beach_apt.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceapt5.jpg"), filename: "veniceapt5.jpg")


venice_beach_room.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceroom1.jpg"), filename: "veniceroom1.jpg")
venice_beach_room.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceroom2.jpg"), filename: "veniceroom2.jpg")
venice_beach_room.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceroom3.jpg"), filename: "veniceroom3.jpg")
venice_beach_room.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceroom4.jpg"), filename: "veniceroom4.jpg")
venice_beach_room.photos.attach(io: open("https://active-storage-fullstack-project-seed.s3.amazonaws.com/veniceroom5.jpg"), filename: "veniceroom5.jpg")
end