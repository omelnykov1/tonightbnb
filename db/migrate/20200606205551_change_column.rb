class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :ltd, :lat
  end
end
