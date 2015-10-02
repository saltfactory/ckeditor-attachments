class Attachment < ActiveRecord::Base
  belongs_to :article

  # has_attached_file :file, {
  #                          :path => "#{Rails.root}/public/system/:filename",
  #                          :url => "/system/:filename",
  #                          :preserve_files => "true"
  #                        }

  # do_not_validate_attachment_file_type :file

  has_attached_file :file,
                    :styles => {thumb: "100x100#"},
                    :path => "#{Rails.root}/public/system/:style/:filename",
                    :url => "/system/:style/:filename"

  # before_post_process :skip_files
  #
  # def skip_files
  #   # ! %w(audio/ogg application/ogg).include?(asset_content_type)
  #   !(asset_content_type =~ /^image/).nil?
  # end

  before_post_process :is_image?
  def is_image?
    !(file_content_type =~ /^image/).nil?
  end

  do_not_validate_attachment_file_type :file

end
