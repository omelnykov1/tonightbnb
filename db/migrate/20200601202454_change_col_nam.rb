class ChangeColNam < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :passwrod_digest, :password_digest 
  end
end
