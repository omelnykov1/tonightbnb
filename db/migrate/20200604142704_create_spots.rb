class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :spot_name, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.string :address, null: false 
      t.string :city, null: false 
      t.string :country, null: false
      t.float :lng, null: false 
      t.float :ltd, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :spots, :host_id, unique: true
  end
end
