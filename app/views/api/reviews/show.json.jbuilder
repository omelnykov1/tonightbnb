json.partial! 'review', review: @review

json.average_rating @review.spot.average_rating
