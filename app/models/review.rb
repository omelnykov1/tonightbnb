class Review < ApplicationRecord
    validates :body, :rating, :guest_id, :spot_id, presence: true
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

    belongs_to :guest,
    class_name: :User,
    foreign_key: :guest_id
end
