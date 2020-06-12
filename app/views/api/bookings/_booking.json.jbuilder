if booking
json.extract! booking, :id, :start_date, :end_date, :num_guests, :spot_id, :guest_id 
json.spot booking.spot
# if booking
    json.photoUrls !!booking.spot ? booking.spot.photos.map { |file| url_for(file)} : ''
end