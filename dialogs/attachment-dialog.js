var uploadButton;

CKEDITOR.dialog.add('attachment-dialog', function(editor){
  return {
    title: 'Attachment',
    minWidth: 400,
    minHeihgt: 200,
    height: 200,
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
                //console.info(fileUrl);
              }
            },
            label: '파일전송',
            'for': [ 'Upload', 'upload' ],
            onLoad:function(){
              uploadButton = $(this.getInputElement().$.children[0]);
              //uploadButton.hide();
            },

            onClick:function(){
              $("#progress").show();
                uploadButton.text('Uploading...');
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
    onOk:function(event){
      //event.preventDefault();
      uploadButton.click();
    },
    onShow: function(){

      $('body').find('iframe.cke_dialog_ui_input_file').load(function(){
        $("#progress").hide();
        //console.info(uploadButton);
        //console.info(CKEDITOR.dialog.getCurrent());

        if(uploadButton.text() == "Uploading...") {
          CKEDITOR.dialog.getCurrent().hide();
          uploadButton.text('파일전송');
        }


      });
    },
    buttons:""
    //buttons:[
    //  {
    //    type:'button',
    //    id:'cancelButton',
    //    label: '취소',
    //    title: 'Cancel',
    //    onClick: function(){
    //      console.debug('on cancel')
    //    }
    //  },
    //  {
    //    type:'button',
    //    id:'submitButton',
    //    label: '파일전송',
    //    title: 'Submit',
    //    onClick: function(){
    //      console.debug('on submit')
    //    }
    //  }
    //]
  }
});