class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :title, :string
  end
end
