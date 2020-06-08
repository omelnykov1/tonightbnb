json.partial! 'spot', spot: @spot
json.photoUrls @spot.photos.map { |file| url_for(file) };

@spot.reviews.includes(:guest).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.guests do
        json.set! review.guest.id do
            json.extract! review.guest, :id, :name
        end
    end
end
