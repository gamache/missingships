class CreateEmailAddresses < ActiveRecord::Migration
  def self.up
    create_table :email_addresses do |t|
      t.string :email, :null => false
      t.string :name
      t.timestamps
    end
  end

  def self.down
    drop_table :email_addresses
  end
end
