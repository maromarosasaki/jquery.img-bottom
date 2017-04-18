(function ($) {

  $.fn.imgBottom = function (offset) {
    if( !offset ){
      offset = 0;
    }
    $target = $(this);
    $(window).on('resize', function () {
      $imgbottomspan = $parent.find('.img-bottom-span');
      if ($imgbottomspan.length > 0) {
        $imgbottomspan.remove();
      }

      dofunc($target);
    });
    dofunc($target);


    function dofunc($target) {
      $target.each(function () {
        $img = $(this);
        img_height = $img.outerHeight() -offset;
        $parent = $(this).parent();
        $imgbottomspan = $parent.find('.img-bottom-span');

        cnt = 1;
        var decrease = 0;
        if ($parent.height() <= $img.outerHeight()) {
          return;
        }
        while (cnt <= 50 && ( $imgbottomspan.length < 1 || $parent.outerHeight() <= img_height + $imgbottomspan.height() )) {
          aa();
          $imgbottomspan = $parent.find('.img-bottom-span');
          cnt++;
          console.log(1);
          decrease += 1;
        }

        function aa() {
          if ($imgbottomspan.length > 0) {
            $imgbottomspan.remove();
          }
          $parent_clone = $parent.clone(true);
          $parent_clone.hide();
          $parent.after($parent_clone);
          parent_height = $parent_clone.outerHeight();
          $insert = $('<span class="img-bottom-span">');


          $insert.css({'float': 'right', 'display': 'inline-block', 'width': '1px'});
          $insert.height(parent_height - img_height - decrease);
          $img.before($insert);
        }

      });
    }

  };
})(jQuery);