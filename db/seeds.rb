# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Spot.delete_all

Spot.create!({spot_name: 'spot 1', price: 200, description: "We want everyone to have a comfortable place to stay. Our digital check-in and the ability to manage your stay from our app, means you won't need to interact with anyone in person.", city: 'New York',
    country: 'USA', title: "Entire apartment in the center of Midtown", lat: 40.764361, lng: -73.987779, spot_type: 'Entire apartment', host_id: 1, address: '101 %th avenue'})