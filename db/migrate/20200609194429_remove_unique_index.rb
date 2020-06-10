class RemoveUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, name: "index_bookings_on_spot_id"
    add_index :bookings, :spot_id
  end
end
