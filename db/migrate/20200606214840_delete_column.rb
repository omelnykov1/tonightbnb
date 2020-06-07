class DeleteColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :spot_name
  end
end
