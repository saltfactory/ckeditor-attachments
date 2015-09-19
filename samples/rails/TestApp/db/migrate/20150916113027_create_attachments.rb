class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :article_uuid, index: true
      t.references :article, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
