class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, name: "index_bookings_on_guest_id"
    add_index :bookings, :guest_id
  end
end
