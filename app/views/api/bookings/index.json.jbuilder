json.bookings do 
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end

json.spots do 
  @bookings.each do |booking|
    json.set! booking.spot_id do 
      json.partial! '/api/spots/spot', spot: booking.spot
      if booking.spot
      json.photoUrls booking.spot.photos.map { |file| url_for(file)}
      end
    end
  end
end