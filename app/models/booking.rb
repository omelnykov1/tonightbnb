class Booking < ApplicationRecord
    validates :start_date, :end_date, :num_guests, presence: true
    # validates :guest_id, uniqueness: { scope: :spot_id }

    belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id 

    belongs_to :guest,
    class_name: :User,
    foreign_key: :guest_id 

    has_one :host,
    through: :spot,
    source: :host
end
