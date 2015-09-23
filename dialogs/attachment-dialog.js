CKEDITOR.dialog.add('attachment-dialog', function(editor){
  return {
    title: 'Attachment',
    minWidth: 400,
    minHeihgt: 200,
    contents: [
      {
        id: 'Upload',
        hidden: true,
        filebrowser: 'uploadButton',
        label: editor.lang.image.upload,
        elements: [
          {
            type: 'file',
            id: 'upload',
            label: '첨부파일을 선택하세요',
            style: 'height:40px',
            size: 38
          },
          {
            type: 'fileButton',
            id: 'uploadButton',
            //filebrowser: 'info:txtUrl',
            filebrowser: {
              action:'QuickUpload',
              target:'info:txtUrl',
              onSelect: function(fileUrl, data){
                console.info(fileUrl);
              }
            },
            label: '파일전송',
            'for': [ 'Upload', 'upload' ],
            //onLoad:function(){
            //  var uploadButton = $(this.getInputElement().$.children[0]);
            //  uploadButton.text('Uploading...');
            //}
            onClick:function(){
              $("#progress").show();
            }
          },
          {
            type: 'html',
            hidden: true,
            html: '<i id="progress" class="fa fa-cog fa-5x fa-spin"></i>'
          }
        ]
      }
    ],
    onShow: function(){
      //console.log('show')
      $('body').find('iframe.cke_dialog_ui_input_file').load(function(){
        console.log('load')
        $("#progress").hide();
      });
    }
  }
});