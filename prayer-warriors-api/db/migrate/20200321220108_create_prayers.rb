class CreatePrayers < ActiveRecord::Migration[6.0]
  def change
    create_table :prayers do |t|
      t.string :title
      t.string :body
      t.integer :amens, default: 0
      t.string :outcome, default: ""
      t.integer :user_id

      t.timestamps
    end
  end
end
