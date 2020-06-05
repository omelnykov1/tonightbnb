class Spot < ApplicationRecord
    validates :price, :address, :city, :country, :lng, :ltd, :title, :description, :spot_type, presence: true

    belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

    has_one_attached :photo
end
