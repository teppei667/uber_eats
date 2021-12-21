class CreateLineFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true, comment: '紐ずくフードID'
      t.references :restaurant, null: false, foreign_key: true, comment: '紐ずくレストランID'
      t.references :order, foreign_key: true, comment: '紐ずくオーダーID'
      t.integer :count, null: false, default: 0, comment: '仮登録されたフードの数'
      t.boolean :active, null: false, default: false, comment: '商品が仮登録状態かどうか'
      
      t.timestamps
    end
  end
end
