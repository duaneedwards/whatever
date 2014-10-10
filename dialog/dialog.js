// Generated by CoffeeScript 1.7.1
(function() {
  window.X = window.X || {};

  X.dialog = (function() {
    var tpl;
    tpl = _.template("<div class=\"modal fade\" tabindex=\"-1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog <%= clazz %>\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button \" class=\"close action-close\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\"><%= title %></h4>\n      </div>\n      <div class=\"modal-body\">\n        <p><%= body %></p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default action-secondary\"><%= secondary %></button>\n        <button type=\"button\" class=\"btn btn-primary action-primary\"><%= primary %></button>\n      </div>\n    </div>\n  </div>\n</div>");
    return function(opts, cb) {
      var $modal, event, ignoreHide;
      if (arguments.length === 1) {
        cb = opts;
        opts = {};
      }
      opts = _.extend({
        body: "Are you sure?",
        primary: "OK",
        secondary: "Cancel",
        title: 'HourlyNerd',
        clazz: '',
        closeIsPrimary: false
      }, opts);
      cb = cb || function() {};
      $modal = $(tpl(opts));
      $('body').append($modal);
      ignoreHide = false;
      event = _.debounce(function($btn, primaryAction) {
        var keepOpen;
        keepOpen = cb.apply($btn, [primaryAction]);
        if (!keepOpen) {
          ignoreHide = true;
          $modal.modal('hide');
          return ignoreHide = false;
        }
      }, 100);
      $modal.on('click.dialog', 'button', function(e) {
        var $btn, primaryAction;
        $btn = $(this);
        primaryAction = null;
        if ($btn.hasClass('action-primary')) {
          primaryAction = true;
        } else if ($btn.hasClass('action-secondary')) {
          primaryAction = false;
        } else if ($btn.hasClass('action-close')) {
          primaryAction = opts.closeIsPrimary;
        }
        return event(e, primaryAction);
      });
      $modal.on('hide.bs.modal', function(e) {
        if (!ignoreHide) {
          return event(null, opts.closeIsPrimary);
        }
      });
      $modal.modal('show');
      return $modal;
    };
  })();

}).call(this);

//# sourceMappingURL=dialog.map