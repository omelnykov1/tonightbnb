class Spot < ApplicationRecord
    validates :price, :address, :city, :country, :lng, :lat, :title, :description, :spot_type, presence: true

    belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

    has_many :bookings,
    class_name: :Booking,
    foreign_key: :spot_id

    has_many :reviews,
    class_name: :Review,
    foreign_key: :spot_id 

    has_many_attached :photos

    def self.search_by_keyword(keyword)
        result = self.where("city LIKE ?", "%#{keyword}%")
                    .or(where("address LIKE ?", "%#{keyword}%"))
                    .or(where("title LIKE ?", "%#{keyword}%" ))
        return result
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def average_rating
        reviews.average(:rating)
    end
end
