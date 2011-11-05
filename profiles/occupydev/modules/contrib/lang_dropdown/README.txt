  ------------------------------------------------------------------------------------
                                      INSTALLATION
  ------------------------------------------------------------------------------------

  This module requires optional core modules: "Locale" and "Content translation".
  The module will populate a new block named "Language switcher dropdown" under "{host}/admin/build/block".
  
  Please see the below instructions to configure the block.

  ------------------------------------------------------------------------------------
                                      CONFIGURATION
  ------------------------------------------------------------------------------------

  1) Set the value of the "Language negotiation" field to "Path prefix only." or "Path prefix with language fallback." 
     or "Domain name only." at "{host}/admin/settings/language/configure".
     
  2) Enable the "Language switcher dropdown" block at "{host}/admin/build/block".
  
  3) Configure the "Language switcher dropdown" block settings as follows:
     - "Output as HTML and JavaScript widget instead of HTML select element"
        The option will allow you to display the widget using themable HTML and JavaScript widget instead of the default select element.
         
     - "Force disable Language icons module to print language icons along language links."
        This option is a fix for the issue at http://drupal.org/node/859236