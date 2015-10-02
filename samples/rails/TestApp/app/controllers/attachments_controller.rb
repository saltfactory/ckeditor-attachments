class AttachmentsController < ApplicationController
  def create
    # @attachment = Attachment.create(attachment_params)
    @attachment = Attachment.new
    @attachment.article_uuid = params[:article_uuid]
    @attachment.file  = params[:upload]
    # Attachment.create(:file => params[:upload])

    if @attachment.save!
      @text =  %Q"<script type='text/javascript'>
              var file = {
                attachment_id: #{@attachment.id},
                file_name: '#{@attachment.file.original_filename}',
                content_type: '#{@attachment.file.content_type}',
                file_url : '#{@attachment.file.url}',
                thumb_url : '#{!(@attachment.file.content_type =~ /^image/).nil? ?  @attachment.file(:thumb) : "null"}'
              };

              window.parent.CKEDITOR.tools.callFunction(#{params[:callback]}, file);
              window.parent.CKEDITOR.tools.callFunction(#{params[:CKEditorFuncNum]},  '#{@attachment.file.url}');
            </script>"

      render :text => @text
    else
      @text = %Q"<script>alert('error')</script>"
      render :text => @text
      # render :nothing => true
    end
  end

  def destroy
    @attachment = Attachment.find(params[:id])

    if @attachment.destroy
      render json: @attachment
    end
    # respond_to do |format|
    #   # format.html { redirect_to articles_url, notice: 'Article was successfully destroyed.' }
    #   format.json { head :no_content }
    # end

  end

  private

  # def attachment_params
  #   params.require(:attachment).permit(:upload)
  # end

end
