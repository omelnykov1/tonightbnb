class AddColumnToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :spot_type, :string
  end
end
