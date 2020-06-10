json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id, :guest_id 
json.spot booking.spot
json.photoUrls booking.spot.photos.map { |file| url_for(file)}