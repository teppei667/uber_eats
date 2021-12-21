class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :total_price, null: false, default: 0, comment: '注文の合計金額'
      t.timestamps
    end
  end
end
