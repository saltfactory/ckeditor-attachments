class Attachment < ActiveRecord::Base
  belongs_to :article
  has_attached_file :file, {
                           :path => "#{Rails.root}/public/system/:filename",
                           :url => "/system/:filename",
                           :preserve_files => "true"
                         }

  do_not_validate_attachment_file_type :file
end
