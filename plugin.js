CKEDITOR.plugins.add('ckeditor-attachments', {
  icons: 'attachment',
  init: function (editor) {
    //console.info('init plugin');
    //console.info(editor);


    //$("#attach_image").click(function(){
    //  editor.openDialog
    //  //CKEDITOR.instances.article_content.openDialog('ckeditor_attachments');
    //});



    editor.addCommand('openAttachmentDialog', new CKEDITOR.dialogCommand('attachment-dialog'));

    editor.ui.addButton('Attachment', {
      label: 'Attach File',
      command: 'openAttachmentDialog',
      toolbar: 'insert,0'
    });

    CKEDITOR.dialog.add('attachment-dialog', CKEDITOR.plugins.getPath('ckeditor-attachments') + 'dialogs/attachment-dialog.js');
  }
});





//CKEDITOR.dialog.add('attachment-dialog', function(editor){
//  return {
//    title: 'Abbreviation Properties',
//    minWidth: 400,
//    minHeight: 200,
//
//    contents: [
//      {
//        id: 'tab-basic',
//        label: 'Basic Settings',
//        elements: [
//          // UI elements of the first tab will be defined here.
//        ]
//      },
//      {
//        id: 'tab-adv',
//        label: 'Advanced Settings',
//        elements: [
//          // UI elements of the second tab will be defined here.
//        ]
//      }
//    ]
//  }
//});