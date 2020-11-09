class CreateFavoriteBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_blogs do |t|
      t.string :fav_blogs
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
