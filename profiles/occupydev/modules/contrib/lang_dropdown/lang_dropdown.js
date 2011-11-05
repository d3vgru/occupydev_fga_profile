(function ($) {
Drupal.behaviors.lang_dropdown = {
  attach: function (context, settings) {
    var settings = settings || Drupal.settings;

    if (settings.lang_dropdown) {
      var flags = settings.lang_dropdown.jsWidget.languageicons;
      if (flags) {
        $.each(flags, function(index, value) {
          $('select.lang-dropdown-select-element option[value="' + index + '"]').attr('title', value);
        });
      }
      var msddSettings = settings.lang_dropdown.jsWidget;

      $('select.lang-dropdown-select-element').msDropDown({
        visibleRows: msddSettings.visibleRows,
        rowHeight: msddSettings.rowHeight,
        animStyle: msddSettings.animStyle
      });
    }

    $('select.lang-dropdown-select-element').change(function() {
      var lang = this.options[this.selectedIndex].value;
      var href = $(this).parents('form').find('input[name="' + lang + '"]').val();
      document.location.href = href;
    });
  }
};
})(jQuery);
