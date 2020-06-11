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

    def self.filtered_search(query)
        result = self.where("city LIKE ?", "%#{query}%")
        return result
    end

end
