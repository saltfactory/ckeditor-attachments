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
            label: editor.lang.image.btnUpload,
            style: 'height:40px',
            size: 38
          },
          {
            type: 'fileButton',
            id: 'uploadButton',
            filebrowser: 'info:txtUrl',
            label: editor.lang.image.btnUpload,
            'for': [ 'Upload', 'upload' ]
          }
        ]
      }
    ]
  }
});