'use strict';
/**
 * Using google map for paths
 */

angular.module('myApp').controller('VisionformController', function ($scope, $mdDialog, $mdSidenav, $interval, jQuery) {
    jQuery(function($) {
        var container = document.getElementById("build-wrap");
        var actionButtons = [
          {
            id: "smile",
            className: "btn btn-success",
            label: "😁",
            type: "button",
            events: {
              click: function() {
                alert("😁😁😁 !SMILE! 😁😁😁");
              }
            }
          }
        ];
        $(container).formBuilder({ actionButtons: actionButtons,
            onSave: function (e, formData){
                console.log('hiii', formData);
            }
        });
        $('.build-wrap').formBuilder();
      });

    // jQuery(function($) {
    //   let options = {
    //     dataType: 'xml',
    //     onSave: function(evt, formData){
    //       showPreview(formData)
    //     },
    //     // formData: '<form-template><fields><field name="text-input-1454163102327" class="form-control" label="Text Field" description="" required="false" type="text" /><field name="date-input-1454163105133" class="form-control" label="Date Field" description="" required="false" type="date" /><field name="checkbox-group-1454163056695" label="Checkbox Group" style="multiple" description="" required="false" type="checkbox-group"><option value="option-1">Option 1</option><option value="option-2">Option 2</option></field></fields></form-template>'
    //   };
    //   const $fbEditor = $(document.getElementById('fb-editor'));
    
    //   const formBuilder = $fbEditor.formBuilder(options);
    
    //   function showPreview(formData) {
    //     let formRenderOpts = {
    //       dataType: 'xml',
    //       formData
    //     };
    //     debugger;
    //     let $renderContainer = $('<form/>');
    //     $renderContainer.formRender(formRenderOpts);
    //     let html = `<!doctype html><title>Form Preview</title><body class="container"><h1>Preview</h1><hr>${$renderContainer.html()}</body></html>`;
    //     var formPreviewWindow = window.open('', 'formPreview', 'height=480,width=640,toolbar=no,scrollbars=yes');
    
    //     formPreviewWindow.document.write(html);
    //     var style = document.createElement('link');
    //     style.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
    //     style.setAttribute('rel', 'stylesheet');
    //     style.setAttribute('type', 'text/css');
    //     formPreviewWindow.document.head.appendChild(style);
    //   }
    
    // });

    $scope.formData = {};   // JavaScript needs an object to put our form's models into.
    
    $scope.formTemplate = [
        {
            "type": "text",
            "label": "First Name",
            "model": "name.first"
        },
        {
            "type": "text",
            "label": "Last Name",
            "model": "name.last"
        },
        {
            "type": "email",
            "label": "Email Address",
            "model": "email"
        },
        {
            "type": "submit",
            "model": "submit"
        },
    ];
    
    $scope.processForm = function () {
      console.log('this is from form')
        /* Handle the form submission... */
    };
});